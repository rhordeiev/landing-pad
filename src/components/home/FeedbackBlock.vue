<template>
  <section id="feedback" class="w-full relative flex justify-center items-center h-72">
    <div
      class="w-6/12 h-5/6 md:w-3/12 absolute bg-lightblue-bg top-0 left-0 rounded-full blur-2xl"
    ></div>
    <div class="w-content absolute flex justify-center z-10 mt-44 sm:justify-between sm:mt-0">
      <div
        class="slide-button mr-7 cursor-pointer"
        @mouseover="onPreviousSlideHover"
        @mouseout="onPreviousSlideOut"
        @click="onPreviousSlideClick"
      >
        <svg
          width="12"
          height="24"
          viewBox="0 0 14 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.0832 1.3345C11.708 0.709657 12.7211 0.709657 13.3459 1.3345C13.9708 1.95933 13.9708 2.9724 13.3459 3.59724L4.60866 12.3345L13.3459 21.0718C13.9708 21.6966 13.9708 22.7097 13.3459 23.3345C12.7211 23.9593 11.708 23.9593 11.0832 23.3345L0.0831828 12.3345L11.0832 1.3345Z"
            fill="#2967F0"
            class="transition"
            ref="previousSlideSvgPath"
          />
        </svg>
      </div>
      <div
        class="ml-7 cursor-pointer"
        @mouseover="onNextSlideHover"
        @mouseout="onNextSlideOut"
        @click="onNextSlideClick"
      >
        <svg
          width="12"
          height="24"
          viewBox="0 0 14 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.91682 22.6655C2.29198 23.2903 1.27891 23.2903 0.654076 22.6655C0.0292373 22.0407 0.029236 21.0276 0.654075 20.4028L9.39133 11.6655L0.654076 2.92825C0.0292372 2.30341 0.0292376 1.29034 0.654076 0.665504C1.27892 0.0406666 2.29198 0.0406647 2.91682 0.665503L13.9168 11.6655L2.91682 22.6655Z"
            fill="#2967F0"
            class="transition"
            ref="nextSlideSvgPath"
          />
        </svg>
      </div>
    </div>
    <div
      class="w-[14rem] flex justify-start overflow-hidden md:inline-block sm:w-[22rem] md:w-[35.25rem] lg:w-[44rem] xl:w-[53.15rem]"
    >
      <div
        class="transition-transform duration-500 transform flex items-center gap-1 xl:gap-1"
        ref="carousel"
      >
        <div
          class="shadow-feedback min-w-fit h-fit bg-white rounded px-5 py-3 m-4 sm:px-5"
          v-for="report in reports"
          :key="report.id"
        >
          <div class="flex items-center justify-between relative">
            <span
              class="text-xs font-bold before:absolute before:inline-block before:top-0.5 before:-left-2.5 before:my-0.5 before:mr-1 before:bg-blue before:w-1 before:h-1 before:rounded-full sm:text-xs sm:before:-left-2.5 md:before:top-1"
            >
              {{ report.name }}
            </span>
            <div class="flex">
              <svg
                width="10"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mx-0.5 w-2.5 h-2.5 sm:w-2.5 sm:h-2.5"
                v-for="star in report.mark"
                :key="`${report.id}-${star}`"
              >
                <path
                  d="M5.05853 0.463526C5.2082 0.00287116 5.85991 0.00286996 6.00959 0.463525L6.88114 3.1459C6.94808 3.35191 7.14006 3.49139 7.35667 3.49139H10.1771C10.6614 3.49139 10.8628 4.1112 10.471 4.3959L8.18921 6.0537C8.01397 6.18102 7.94064 6.4067 8.00758 6.61271L8.87913 9.29508C9.02881 9.75574 8.50157 10.1388 8.10971 9.8541L5.82795 8.19631C5.65271 8.06898 5.41541 8.06898 5.24017 8.19631L2.9584 9.8541C2.56655 10.1388 2.03931 9.75574 2.18898 9.29508L3.06054 6.61271C3.12747 6.4067 3.05415 6.18102 2.8789 6.0537L0.59714 4.3959C0.205283 4.1112 0.40667 3.49139 0.891032 3.49139H3.71144C3.92806 3.49139 4.12004 3.35191 4.18697 3.1459L5.05853 0.463526Z"
                  fill="#2967F0"
                />
              </svg>
            </div>
          </div>
          <div class="text-[.68rem] my-1.5 text-gray sm:text-[.68rem]">{{ report.field }}</div>
          <div
            class="text-xs w-[9.5rem] leading-3 font-gilroy sm:text-xs sm:w-72 md:w-52 lg:w-[17.3rem] xl:w-52"
          >
            {{ report.text }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeedbackBlock',
  data() {
    return {
      page: 1,
      translateCoefficient: 100,
      visibleReportsCount: 3
    }
  },
  computed: {
    reports() {
      return this.$store.state.reports
    },
    pageCount() {
      return Math.ceil(this.reports.length / this.visibleReportsCount)
    }
  },
  methods: {
    onPreviousSlideHover() {
      this.$refs.previousSlideSvgPath.classList.add('fill-lightblue')
    },
    onPreviousSlideOut() {
      this.$refs.previousSlideSvgPath.classList.remove('fill-lightblue')
    },
    onNextSlideHover() {
      this.$refs.nextSlideSvgPath.classList.add('fill-lightblue')
    },
    onNextSlideOut() {
      this.$refs.nextSlideSvgPath.classList.remove('fill-lightblue')
    },
    returnSliderToStart() {
      if (this.$refs.carousel) {
        this.$refs.carousel.style.transform = 'translateX(0)'
      }
      this.page = 1
    },
    onNextSlideClick() {
      if (this.page < this.pageCount) {
        this.page++
        this.$refs.carousel.style.transform = `translateX(-${
          this.translateCoefficient * (this.page - 1)
        }%)`
      } else {
        this.returnSliderToStart()
      }
    },
    onPreviousSlideClick() {
      if (this.page > 1) {
        this.page--
        this.$refs.carousel.style.transform = `translateX(-${
          this.translateCoefficient * (this.page - 1)
        }%)`
      } else {
        this.$refs.carousel.style.transform = `translateX(-${
          this.translateCoefficient * (this.pageCount - 1)
        }%)`
        this.page = this.pageCount
      }
    },
    calculateTranslateCoefficient() {
      if (document.body.clientWidth <= 750) {
        this.translateCoefficient = 16.7
      } else {
        this.translateCoefficient = 100
      }
    },
    setVisibleReportsCount() {
      if (document.body.clientWidth > 751 && document.body.clientWidth < 1263) {
        this.visibleReportsCount = 2
      } else if (document.body.clientWidth < 751) {
        this.visibleReportsCount = 1
      } else {
        this.visibleReportsCount = 3
      }
    }
  },
  mounted() {
    this.setVisibleReportsCount()
    this.calculateTranslateCoefficient()
    window.addEventListener('resize', this.calculateTranslateCoefficient)
    window.addEventListener('resize', () => {
      this.setVisibleReportsCount()
      this.returnSliderToStart()
    })
  }
}
</script>

<style scoped></style>
