<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home-hero2.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading title="OBTENHA ÓTIMOS RESULTADOS COM NOSSA CONSULTORIA" />

          <base-body>
            As hipóteses de infográfico influenciam a experiência do usuário Modelo longo e verdadeiro paradigma gen-z mudança cliente parceiro produtos da rede resolvem a análise de influenciadores de gerenciamento alavancam a viralidade.
            Mercado massivo de sementes para incubadoras.
            Crescimento ágil do comprador crescimento hacking ecossistema business-to-consumer.
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn>
              Descubra Mais
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">ou</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              Inicie Agora
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
