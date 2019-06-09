import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import LockIcon from '@material-ui/icons/LockOutlined';

const styles = theme => ({
    toolbarMain: {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
      marginBottom: theme.spacing.unit * 4
    },
    toolbarTitle: {
      flex: 1
    },
    layout: {
      width: 'auto',
      display: 'block',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing.unit
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    }
  });
  
  class Header extends Component {
      state ={
          isOpen: false
      };

      handleOpen = () =>{
          this.setState({ isOpen: true })
      };

      handleClose = () => {
          this.setState({ isOpen: false })
      };

      render(){
          const { classes } = this.props;

          return(
              <Toolbar className={classes.toolbarMain}>
                  <Typography 
                    className={classes.toolbarTitle}
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                  >
                      <Link to="/">Test Blog</Link>
                  </Typography>
                  <Button variant="outlined" size="small" onClick={this.handleOpen}>
                      관리자
                  </Button>
                  <Modal
                    aria-labelledby="제목"
                    aria-describedby="본문"
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                  >
                    <div className={classes.layout}>
                        <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            관리자 로그인
                        </Typography>
                        <form className={classes.form}>
                            <FormControl fullWidth required margin="normal">
                            <InputLabel htmlFor="password">비밀번호</InputLabel>
                            <Input id="password" name="password" 
                                type="password" autoFocus autoComplete="current-password"
                            />
                            </FormControl>
                            <Button type="submit" fullWidth variant="contained"
                            color="primary" className={classes.submit}
                            >
                            접속하기
                            </Button>
                        </form>
                        </Paper>
                    </div>
                </Modal>
              </Toolbar>
          )
      }
  }

  Header.propTypes = {
      classes: PropTypes.object.isRequired
  };

  export default withStyles(styles)(Header);