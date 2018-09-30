import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/matheus_perfil.jpg";
import team3 from "assets/img/faces/vainer_perfil.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Matheus Crepaldi
                  <br />
                  <small className={classes.smallTitle}>Web Developer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    href="https://www.linkedin.com/in/matheus-crepaldi-56b483ba/"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                  <Button
                    href="https://www.instagram.com/matheuscrepaldi/"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    href="https://www.facebook.com/matheus.crepaldi.7"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Vainer Fabri
                  <br />
                  <small className={classes.smallTitle}>Web Developer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    href="https://www.linkedin.com/in/vainer-menani-fabri-a0716b104/"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                  <Button
                    href="https://www.instagram.com/vainer_fabri/"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    href="https://www.facebook.com/vainer.fabri"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
