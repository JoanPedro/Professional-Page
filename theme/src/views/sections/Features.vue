<template>
  <base-section
    id="features"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-keyboard-outline',
          title: 'Design Moderno',
          text: 'Liberte com eficiência as informações da mídia sem valor entre mídias. Maximize rapidamente os esquemas de entregas pontuais de valor.',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Fotografia',
          text: 'Liberte com eficiência as informações da mídia sem valor entre mídias. Maximize rapidamente os esquemas de entregas pontuais de valor.',
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Criação de Marca',
          text: 'Liberte com eficiência as informações da mídia sem valor entre mídias. Maximize rapidamente os esquemas de entregas pontuais de valor.',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: 'Suporte 24/7',
          text: 'Liberte com eficiência as informações da mídia sem valor entre mídias. Maximize rapidamente os esquemas de entregas pontuais de valor.',
        },
      ],
    }),
  }
</script>
