<template>
  <base-section id="theme-features">
    <base-section-heading title="Recursos">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Plano Alimentar',
          icon: 'mdi-fountain-pen-tip',
        },
        {
          title: 'Acompanhamento Semanal',
          icon: 'mdi-cellphone',
        },
        {
          title: 'Cardápio Adaptável',
          icon: 'mdi-pencil-box-outline',
        },
        {
          title: 'Portfólio',
          icon: 'mdi-image-size-select-actual',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Dieta Flexível',
          icon: 'mdi-ice-pop',
        },
        {
          title: 'Suporte 24/7',
          icon: 'mdi-help-circle-outline',
        },
      ],
    }),
  }
</script>
