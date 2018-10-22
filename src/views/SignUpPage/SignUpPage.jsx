import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import People from "@material-ui/icons/People";
import Person from "@material-ui/icons/Person";
import Email from "@material-ui/icons/Email";
import NavPills from "components/NavPills/NavPills.jsx";
import LocationCity from "@material-ui/icons/LocationCity";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
//import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg8.jpg";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardAnimaton: "cardHidden",
      admCondominio: "",
      admEmail: "",
      admSenha: "",
      admSenha2: "",
      morNome: "",
      morEmail: "",
      morSenha: "",
      morSenha2: "",
      admCondominioError: true,
      admEmailError: true,
      admSenhaError: true,
      admSenha2Error: true,
      morNomeError: true,
      morEmailError: true,
      morSenhaError: true,
      morSenha2Error: true,
      submitButton: true
    };
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  onChangeInput = (id, value) => {
    let error = true;

    switch (id) {
      case "admCondominio":
        value === "" ? (error = true) : (error = false);
        this.setState({
          admCondominio: value,
          admCondominioError: error
        });
        break;

      case "admEmail":
        value === "" ? (error = true) : (error = false);
        this.setState({
          admEmail: value,
          admEmailError: error
        });
        break;

      case "admSenha":
        value === "" ? (error = true) : (error = false);
        this.setState({
          admSenha: value,
          admSenhaError: error
        });
        break;

      case "admSenha2":
        value === "" ? (error = true) : (error = false);

        this.setState({
          admSenha2: value,
          admSenha2Error: error
        });
        break;

      default:
        return;
    }

    if ((this.state.admCondominioError && this.state.admEmailError) === false) {
      this.setState({
        submitButton: false
      });
    }
  };

  validatePassword = () => {
    if (this.state.admSenha !== this.state.admSenha2) {
      this.setState({
        admSenha2Error: true
      });
    }
  };

  submitForm = event => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="MV Condomínios"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form onSubmit={this.submitForm} className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Cadastrar novo usuário</h4>
                    </CardHeader>
                    <p className={classes.divider} />
                    <CardBody>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={12} lg={12}>
                          <NavPills
                            color="primary"
                            tabs={[
                              {
                                tabButton: "Admin / Síndico",
                                tabIcon: Assignment,
                                tabContent: (
                                  <div>
                                    <CustomInput
                                      labelText="Condominio"
                                      id="admCondominio"
                                      error={this.state.admCondominioError}
                                      onChange={e =>
                                        this.onChangeInput(
                                          e.target.id,
                                          e.target.value
                                        )
                                      }
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        type: "text",
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <LocationCity
                                              className={
                                                classes.inputIconsColor
                                              }
                                            />
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                    <CustomInput
                                      labelText="Email..."
                                      id="admEmail"
                                      error={this.state.admEmailError}
                                      onChange={e =>
                                        this.onChangeInput(
                                          e.target.id,
                                          e.target.value
                                        )
                                      }
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        type: "email",
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <Email
                                              className={
                                                classes.inputIconsColor
                                              }
                                            />
                                          </InputAdornment>
                                        )
                                      }}
                                    />

                                    <CustomInput
                                      labelText="Senha"
                                      id="admSenha"
                                      error={this.state.admSenhaError}
                                      onChange={e =>
                                        this.onChangeInput(
                                          e.target.id,
                                          e.target.value
                                        )
                                      }
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        type: "password",
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <Icon
                                              className={
                                                classes.inputIconsColor
                                              }
                                            >
                                              lock_outline
                                            </Icon>
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                    <CustomInput
                                      labelText="Repetir Senha"
                                      id="admSenha2"
                                      error={this.state.admSenha2Error}
                                      onBlur={this.validatePassword}
                                      onChange={e =>
                                        this.onChangeInput(
                                          e.target.id,
                                          e.target.value
                                        )
                                      }
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        type: "password",
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <Icon
                                              className={
                                                classes.inputIconsColor
                                              }
                                            >
                                              lock_outline
                                            </Icon>
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                  </div>
                                )
                              },
                              {
                                tabButton: "Moradores",
                                tabIcon: People,
                                tabContent: (
                                  <div>
                                    <CustomInput
                                      labelText="Nome"
                                      id="morNome"
                                      error={this.state.morNomeError}
                                      onChange={e =>
                                        this.onChangeInput(
                                          e.target.id,
                                          e.target.value
                                        )
                                      }
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        type: "text",
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <Person
                                              className={
                                                classes.inputIconsColor
                                              }
                                            />
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                    <CustomInput
                                      labelText="Email..."
                                      id="morEmail"
                                      error={this.state.morEmailError}
                                      onChange={e =>
                                        this.onChangeInput(
                                          e.target.id,
                                          e.target.value
                                        )
                                      }
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        type: "email",
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <Email
                                              className={
                                                classes.inputIconsColor
                                              }
                                            />
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                    <CustomInput
                                      labelText="Senha"
                                      id="morSenha"
                                      error={this.state.morSenhaError}
                                      onChange={e =>
                                        this.onChangeInput(
                                          e.target.id,
                                          e.target.value
                                        )
                                      }
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        type: "password",
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <Icon
                                              className={
                                                classes.inputIconsColor
                                              }
                                            >
                                              lock_outline
                                            </Icon>
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                    <CustomInput
                                      labelText="Repetir Senha"
                                      id="morSenha2"
                                      error={this.state.morSenha2Error}
                                      onChange={e =>
                                        this.onChangeInput(
                                          e.target.id,
                                          e.target.value
                                        )
                                      }
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        type: "password",
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <Icon
                                              className={
                                                classes.inputIconsColor
                                              }
                                            >
                                              lock_outline
                                            </Icon>
                                          </InputAdornment>
                                        )
                                      }}
                                    />
                                  </div>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button
                        type="submit"
                        color="primary"
                        size="md"
                        disabled={this.state.submitButton}
                      >
                        Cadastrar
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(SignUpPage);
