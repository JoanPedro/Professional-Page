<template>
  <div>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />

    <base-text-field label="Nome" />

    <base-text-field label="Email" />

    <base-text-field label="Título" />

    <base-textarea
      class="mb-6"
      label="O que precisa & Descrição"
    />

    <base-btn
      :color="!theme.isDark ? 'accent' : 'white'"
      href="mailto:shop@vuetifyjs.com?subject=Daedal%20Theme%20Question"
      outlined
      target="_blank"
    >
      Enviar Mensagem
    </base-btn>
  </div>
</template>

<script>
  export default {
    name: 'BaseContactForm',

    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'Envie sua mensagem',
      },
    },
  }
</script>
