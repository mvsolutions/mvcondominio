import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import LocationCity from "@material-ui/icons/LocationCity";
import Event from "@material-ui/icons/Event";
import NotificationsActive from "@material-ui/icons/NotificationsActive";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Vamos falar sobre o App!</h2>
            <h5 className={classes.description}>
              Nosso App facilita a comunicação entre moradores e síndico,
              notifica o morador sobre futuras reuniões ou qualquer ocorrido
              dentro do condomínio, e permite que o morador faça o booking
              (locação) de qualquer área comum do prédio, sem aquela papelada
              toda e podendo ser feita de qualquer lugar, com muito mais
              facilidade de forma ágil e prática!
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Reserva de áreas comuns"
                description="Com essa função, você pode reserver qualquer área comum sem precisar levantar do sofá. Com poucos cliques, você terá a sua área de lazer favorita."
                icon={LocationCity}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Notificações de eventos"
                description="Com essa função, você será sempre notificado sobre todos os eventos acontecendo no seu condomínio em tempo real."
                icon={Event}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Notificações de encomendas"
                description="Quem não fica ansioso por uma encomenda? Com essa função, você será notificado pelo App no exato momento que a sua encomenda chegar."
                icon={NotificationsActive}
                iconColor="info"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
