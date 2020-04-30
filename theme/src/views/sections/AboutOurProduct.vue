<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="Sobre nossos produtos"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAboutOurProduct',

    data: () => ({
      cards: [
        {
          title: 'Aumente sua receita',
          subtitle: 'Melhor Produtividade',
          text: 'Expor a culpa de abandonar a sua responsabilidade, suavidade, que é laborut doloroso. Está sempre em curso das coisas é fácil estexpedita nenhuma diferença.',
          callout: '01',
        },
        {
          title: 'Preços acessíveis',
          subtitle: 'Ofertas Especiais',
          text: 'Expor a culpa de abandonar a sua responsabilidade, suavidade, que é laborut doloroso. Está sempre em curso das coisas é fácil estexpedita nenhuma diferença.',
          callout: '02',
        },
        {
          title: 'Definição de Metas',
          subtitle: 'Fluxo de Renda',
          text: 'Expor a culpa de abandonar a sua responsabilidade, suavidade, que é laborut doloroso. Está sempre em curso das coisas é fácil estexpedita nenhuma diferença.',
          callout: '03',
        },
      ],
    }),
  }
</script>
