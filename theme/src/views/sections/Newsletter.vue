<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="primary"
      space="36"
    >
      <v-row
        align="center"
        class="ma-0"
        justify="center"
      >
        <base-title
          space="0"
          title="FIQUE POR DENTRO"
        />

        <v-responsive
          class="px-4 mx-6"
          max-width="600"
          width="100%"
        >
          <base-text-field
            hide-details
            label="Seu Endereço de Email"
          >
            <template v-slot:append-outer>
              <v-btn
                class="ml-n1"
                height="40"
                outlined
                style="margin-top: -7px;"
              >
                Se inscrever
              </v-btn>
            </template>
          </base-text-field>
        </v-responsive>
      </v-row>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNewsletterAlt',
  }
</script>
