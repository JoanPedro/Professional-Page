<template>
  <base-section
    id="pro-features"
  >
    <v-img
      :src="require('@/assets/logo.svg')"
      class="mx-auto mb-8"
      max-width="128"
    />

    <base-section-heading title="Comparação de Funcionalidades">
      Obtenha nossa <strong>Consultoria</strong> e suba de nível em seus resultados<br>com cardápios variados, controle alimentar e coach.
    </base-section-heading>

    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="7"
        >
          <v-simple-table>
            <thead>
              <tr>
                <th />
                <th class="body-1 font-weight-bold text-center">
                  Acompanhamento Nutricional?
                </th>
                <th class="body-1 font-weight-bold text-center">
                  Consultoria Nutricional?
                </th>
              </tr>
            </thead>

            <tbody class="body-1">
              <tr
                v-for="([name, one, two], i) in features"
                :key="i"
              >
                <td v-text="name" />

                <td class="text-center font-weight-bold">
                  <template v-if="typeof one === 'boolean'">
                    <v-icon :color="one ? 'success' : 'error'">
                      mdi-{{ one ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ one }}
                  </template>
                </td>

                <td class="text-center font-weight-bold">
                  <template v-if="typeof two === 'boolean'">
                    <v-icon :color="two ? 'success' : 'error'">
                      mdi-{{ two ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ two }}
                  </template>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>

        <v-col
          cols="12"
          md="5"
        >
          <v-card
            elevation="16"
            class="mb-12"
          >
            <base-img
              max-width="100%"
              :src="mySVG"
            />
          </v-card>

          <div class="text-center">
            <base-btn
              :tile="false"
              color="primary"
              href="https://store.vuetifyjs.com/product/daedal-responsive-multi-purpose-theme-pro?ref=vtyd-pro-page-features"
              rounded
            >
              Adquira sua consultoria

              <v-icon right>
                mdi-rocket
              </v-icon>
            </base-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProChart',

    data: () => ({
      features: [
        ['Acompanhamento (Dias)', 4, 12],
        ['Resultados Semanais', 1, 4],
        ['Bioimpedancia', true, true],
        ['Suporte via Email', true, true],
        ['Acompanhamento via Whatsapp', false, true],
        ['3 meses de atualização com desconto', false, true],
        ['Preço', 'R$80', 'R$350'],
      ],
      mySVG: require('../../assets/health-1.svg'),
    }),
  }
</script>
