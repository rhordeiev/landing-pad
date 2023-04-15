<template>
  <section id="team" class="w-full flex justify-center">
    <div
      class="w-content relative flex flex-col items-center rounded-2xl bg-lightblue-team-bg overflow-hidden p-7 sm:p-14"
    >
      <div class="team-bg-blured-block -top-10 -left-20"></div>
      <h2 class="text-4xl font-medium flex my-2 relative md:text-5xl">
        <svg
          width="40"
          height="40"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="-rotate-90 absolute bottom-7 -left-8"
        >
          <path
            d="M18.6337 36.8516C22.7921 36.8516 30.0693 36.5084 37 36.5084M12.396 27.5869L26.9505 9.74372M2 24.4986C2 23.4006 2 8.94306 2 1.85156"
            stroke="#0F38B4"
            stroke-width="3.46535"
            stroke-linecap="round"
          />
        </svg>
        Team
      </h2>
      <h3 class="text-xl w-full leading-6 text-center font-medium my-2 sm:w-60 md:w-72 md:text-2xl">
        A team of <span class="text-darkblue">professionals</span> is
        <span class="text-darkblue">working</span> on your problem
      </h3>
      <div class="w-full grid grid-cols-1 mt-10 lg:grid-cols-2 xl:w-10/12">
        <div
          class="flex justify-center my-5"
          v-for="teamMember in team"
          :key="`team-member-${teamMember.id}`"
        >
          <figure class="flex flex-col items-center">
            <img
              :src="getTeamMemberIcon(teamMember.avatar)"
              :alt="teamMember.name"
              width="193"
              height="193"
            />
            <figcaption class="flex flex-col">
              <div class="flex flex-col items-center my-4">
                <div class="font-bold text-xl text-center">{{ teamMember.name }}</div>
                <div class="font-bold text-sm text-darkblue h-7 text-center">
                  {{ teamMember.role }}
                </div>
              </div>
              <p class="text-sm text-center w-full sm:w-72">
                {{ teamMember.description }}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="team-bg-blured-block -bottom-10 -right-20"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamBlock',
  computed: {
    team() {
      return this.$store.state.teamMembers
    }
  },
  methods: {
    getTeamMemberIcon(filename) {
      return new URL(`../../assets/img/team/${filename}`, import.meta.url)
    }
  }
}
</script>

<style scoped></style>
