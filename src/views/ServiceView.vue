<template>
  <section id="service" class="w-full h-full flex justify-center">
    <div class="w-content main-top-offset">
      <h2 class="text-4xl font-medium flex whitespace-pre md:text-4xl">
        {{ service.name }}
        <svg
          width="30"
          height="30"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="relative bottom-3 right-3"
        >
          <path
            d="M18.6337 36.8516C22.7921 36.8516 30.0693 36.5084 37 36.5084M12.396 27.5869L26.9505 9.74372M2 24.4986C2 23.4006 2 8.94306 2 1.85156"
            stroke="#2967F0"
            stroke-width="3.46535"
            stroke-linecap="round"
          />
        </svg>
      </h2>
      <div class="w-full flex flex-col justify-between gap-5 md:flex-row">
        <div class="w-full flex flex-col md:w-[71%]">
          <div
            class="w-full h-fit py-4 px-6 my-2 shadow-subservice rounded-xl hover:cursor-pointer"
            :id="`subservice-${subservice.id}`"
            :key="`subservice-${subservice.id}`"
            @click="onSubserviceClick(subservice.id)"
            v-for="subservice in service.subservices"
          >
            <div class="flex justify-between items-center">
              <div
                class="text-base break-all w-10/12 font-medium transition md:text-lg"
                :id="`subservice-name-${subservice.id}`"
              >
                {{ subservice.name }}
              </div>
              <svg
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                class="transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
                :id="`expand-icon-${subservice.id}`"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.3345 2.91657C0.709657 2.29173 0.709657 1.27867 1.3345 0.653832C1.95933 0.0289931 2.9724 0.0289918 3.59724 0.653831L12.3345 9.39109L21.0718 0.653832C21.6966 0.0289928 22.7097 0.0289932 23.3345 0.653832C23.9593 1.27867 23.9593 2.29173 23.3345 2.91657L12.3345 13.9166L1.3345 2.91657Z"
                  fill="#0F0F10"
                />
              </svg>
            </div>
            <div
              class="w-full h-0 overflow-hidden transition-all mt-2"
              :id="`subservice-text-${subservice.id}`"
            >
              <div
                class="w-full h-0.5 bg-lightblue-bg"
                :id="`subservice-divider-${subservice.id}`"
              ></div>
              <p class="break-words overflow-y-auto py-3 text-sm">
                {{ subservice.text }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col md:w-64">
          <div
            class="w-full flex flex-col justify-center items-center shadow-service-links rounded-xl p-3"
          >
            <h3 class="font-medium text-[1.65rem] leading-9 font-gilroy">Our services</h3>
            <div class="w-full my-4">
              <div
                :class="`w-full flex items-center justify-start my-1 rounded py-1.5 px-4 transition duration-300 hover:bg-blue hover:text-white ${activeLinkClass(
                  service.slug
                )}`"
                v-for="service in services"
                :key="`service-${service.id}`"
              >
                <div class="bg-lightblue-service-icon p-0.5 rounded">
                  <img
                    width="20"
                    height="20"
                    :src="getServiceIcon(service.icon)"
                    :alt="`${service.name}`"
                  />
                </div>
                <router-link
                  :to="`/services/${service.slug}?subservice_id_to_open=${service.subservices[0].id}`"
                >
                  <h1
                    class="ml-3 font-medium text-sm transition"
                    :id="`service-name-${service.id}`"
                  >
                    {{ service.name }}
                  </h1>
                </router-link>
              </div>
            </div>
          </div>
          <div class="service bg-cover relative mt-4">
            <div class="absolute w-full h-full bg-blue opacity-80 rounded-lg"></div>
            <img
              src="../assets/img/ask-question-services.png"
              alt="background"
              class="-z-10 absolute w-full h-full object-cover rounded-lg"
            />
            <div
              class="w-full h-full my-10 z-10 flex flex-col items-center justify-center sm:mb-0.5 sm:mt-3"
            >
              <span class="w-44 text-center font-medium text-base text-white">
                Didn't find the right service?
              </span>
              <router-link to="/#contacts">
                <button class="ask-button w-44">Ask a question</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceView',
  data() {
    return {
      service: null,
      expandIconClicked: []
    }
  },
  computed: {
    services() {
      return this.$store.state.services
    }
  },
  methods: {
    getServiceIcon(filename) {
      return new URL(`../assets/img/services/${filename}`, import.meta.url)
    },
    setServiceBySlug() {
      const serviceSlug = this.$route.path.split('/')[2]
      this.service = this.services.find((service) => service.slug === serviceSlug)
    },
    showCurrentSubservice() {
      const subserviceIdToOpen = +this.$route.query.subservice_id_to_open
      const subserviceExists = this.service.subservices.some(
        (subservice) => subservice.id === subserviceIdToOpen
      )
      if (subserviceExists) {
        this.onSubserviceClick(subserviceIdToOpen)
      }
    },
    activeLinkClass(serviceSlug) {
      const currentServiceSlug = this.$route.path.split('/')[2]
      if (currentServiceSlug === serviceSlug) {
        return 'active-service-link'
      } else {
        return ''
      }
    },
    onSubserviceClick(subserviceId) {
      const subserviceNameBlock = document.getElementById(`subservice-name-${subserviceId}`)
      const subserviceTextBlock = document.getElementById(`subservice-text-${subserviceId}`)
      const expandIcon = document.getElementById(`expand-icon-${subserviceId}`)
      if (!this.expandIconClicked[subserviceId]) {
        subserviceNameBlock?.classList.add('text-darkblue')
        const textBlockHeight = subserviceTextBlock?.children[1].offsetHeight
        subserviceTextBlock.style.height = `${textBlockHeight}px`
        subserviceTextBlock?.classList.add('my-4')
        expandIcon?.classList.add('rotate-180')
        this.expandIconClicked[subserviceId] = true
      } else {
        subserviceNameBlock?.classList.remove('text-darkblue')
        subserviceTextBlock.style.height = 0
        subserviceTextBlock?.classList.remove('my-4')
        expandIcon.classList?.remove('rotate-180')
        this.expandIconClicked[subserviceId] = false
      }
    }
  },
  updated() {
    setTimeout(() => {
      this.expandIconClicked = []
      this.setServiceBySlug()
      this.showCurrentSubservice()
    }, 1)
  },
  beforeMount() {
    this.setServiceBySlug()
  },
  mounted() {
    this.expandIconClicked = []
    this.showCurrentSubservice()
  }
}
</script>

<style scoped></style>
