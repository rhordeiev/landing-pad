<template>
  <section id="services" class="w-full flex justify-center overflow-hidden relative">
    <div class="w-64 h-64 absolute bg-lightblue-bg top-96 -right-5 rounded-full blur-2xl z-0"></div>
    <div class="w-content flex flex-col items-center z-10">
      <h2 class="mt-2 text-4xl font-medium flex whitespace-pre sm:text-4xl md:text-5xl">
        Our <span class="text-darkblue">Services</span
        ><svg
          width="30"
          height="30"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="relative bottom-1 right-1"
        >
          <path
            d="M18.6337 36.8516C22.7921 36.8516 30.0693 36.5084 37 36.5084M12.396 27.5869L26.9505 9.74372M2 24.4986C2 23.4006 2 8.94306 2 1.85156"
            stroke="#0F38B4"
            stroke-width="3.46535"
            stroke-linecap="round"
          />
        </svg>
      </h2>
      <h3 class="text-lg text-center mt-2 leading-5 font-medium sm:mt-0 sm:leading-10 md:text-2xl">
        Tailor-made solutions for your unique situation
      </h3>
      <span class="text-xs my-3 leading-4 md:text-sm">
        On the other hand, we denounce with righteous indignation and dislike men who are so
        beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that
        they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to
        those who fail in their duty through weakness of 7
      </span>
      <div
        class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-5 xl:gap-6"
      >
        <div
          class="service p-4 pb-10 transition duration-500 bg-white"
          v-for="service in services"
          :key="`service-${service.id}`"
          :id="`service-${service.id}`"
          @mouseover="onServiceHover(service.id)"
          @mouseout="onServiceOut(service.id)"
        >
          <div class="flex items-center mt-2 mb-4">
            <div class="bg-lightblue-service-icon p-1 rounded">
              <img
                width="31.5"
                height="31.5"
                :src="getServiceIcon(service.icon)"
                :alt="`${service.name}`"
              />
            </div>
            <router-link
              :to="`/services/${service.slug}?subservice_id_to_open=${service.subservices[0].id}`"
            >
              <h1 class="ml-3 font-[600] transition" :id="`service-name-${service.id}`">
                {{ service.name }}
              </h1>
            </router-link>
          </div>
          <div
            class="h-[1px] w-full bg-darkblue-service-line transition"
            :id="`service-line-${service.id}`"
          ></div>
          <div :id="`service-links-${service.id}`">
            <router-link
              v-for="subservice in service.subservices"
              :to="`/services/${service.slug}?subservice_id_to_open=${subservice.id}`"
              class="flex justify-between items-center my-4"
              :key="`service-link-${service.id}-${subservice.id}`"
              :id="`service-link-${service.id}-${subservice.id}`"
              @mouseover="onServiceLinkHover(`service-link-${service.id}-${subservice.id}`)"
              @mouseout="onServiceLinkOut(`service-link-${service.id}-${subservice.id}`)"
            >
              <span
                class="text-sm w-40 transition underline break-all decoration-transparent hover:decoration-white"
              >
                {{ subservice.name }}
              </span>
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="transition-transform"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.95841 11.8328C1.64599 12.1452 1.13946 12.1452 0.827038 11.8328C0.514619 11.5203 0.514618 11.0138 0.827037 10.7014L5.19567 6.33275L0.827037 1.96412C0.514618 1.6517 0.514618 1.14517 0.827038 0.832752C1.13946 0.520333 1.64599 0.520332 1.95841 0.832751L7.45841 6.33275L1.95841 11.8328Z"
                  fill="#0F0F10"
                />
              </svg>
            </router-link>
          </div>
        </div>
        <div class="service bg-ask-question-image-home bg-cover relative">
          <div class="absolute w-full h-full bg-blue opacity-80 rounded-lg z-10"></div>
          <img
            src="../../assets/img/ask-question-home.png"
            alt="background"
            class="-z-10 absolute w-full h-full object-cover rounded-lg"
          />
          <div class="w-full h-full my-10 z-10 flex flex-col items-center justify-center sm:my-0">
            <span class="w-6/12 text-center font-medium text-xl text-white">
              Didn't find the right service?
            </span>
            <router-link to="/#contacts">
              <button class="ask-button">Ask a question</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesBlock',
  computed: {
    services() {
      return this.$store.state.services
    }
  },
  methods: {
    onServiceHover(serviceKey) {
      const service = document.getElementById(`service-${serviceKey}`)
      const serviceName = document.getElementById(`service-name-${serviceKey}`)
      const serviceLine = document.getElementById(`service-line-${serviceKey}`)
      const serviceLinks = document.getElementById(`service-links-${serviceKey}`)
      service.classList.add('bg-blue')
      service.classList.remove('bg-white')
      serviceName.classList.add('text-white')
      serviceName.classList.remove('text-black')
      serviceLine.classList.add('bg-white')
      serviceLine.classList.remove('bg-darkblue-service-line')
      for (let link of serviceLinks.children) {
        link.children[0].classList.add('text-white')
        link.children[0].classList.remove('text-black')
        link.children[1].children[0].classList.add('fill-white')
        link.children[1].children[0].classList.remove('fill-black')
      }
    },
    onServiceOut(serviceKey) {
      const service = document.getElementById(`service-${serviceKey}`)
      const serviceName = document.getElementById(`service-name-${serviceKey}`)
      const serviceLine = document.getElementById(`service-line-${serviceKey}`)
      const serviceLinks = document.getElementById(`service-links-${serviceKey}`)
      service.classList.add('bg-white')
      service.classList.remove('bg-blue')
      serviceName.classList.add('text-black')
      serviceName.classList.remove('text-white')
      serviceLine.classList.add('bg-darkblue-service-line')
      serviceLine.classList.remove('bg-white')
      for (let link of serviceLinks.children) {
        link.children[0].classList.add('text-black')
        link.children[0].classList.remove('text-white')
        link.children[1].children[0].classList.add('fill-black')
        link.children[1].children[0].classList.remove('fill-white')
      }
    },
    onServiceLinkHover(serviceLinkId) {
      const serviceLink = document.getElementById(serviceLinkId)
      serviceLink.children[1].classList.add('-translate-x-4')
      serviceLink.children[1].classList.add('rotate-180')
      serviceLink.children[1].classList.remove('translate-x-0')
      serviceLink.children[1].classList.remove('rotate-0')
    },
    onServiceLinkOut(serviceLinkId) {
      const serviceLink = document.getElementById(serviceLinkId)
      serviceLink.children[1].classList.add('translate-x-0')
      serviceLink.children[1].classList.add('rotate-0')
      serviceLink.children[1].classList.remove('-translate-x-4')
      serviceLink.children[1].classList.remove('rotate-180')
    },
    getServiceIcon(filename) {
      return new URL(`../../assets/img/services/${filename}`, import.meta.url)
    }
  }
}
</script>

<style scoped></style>
