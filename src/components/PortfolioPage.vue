<template>
<section class="p-8 text-gray-100">
    <h1 class="text-4xl font-bold mb-4">Check Out My GitHub Projects!</h1>

    <!-- Loading State -->
    <p v-if="loading" class="text-lg">Loading projects...</p>

    <!-- Error State -->
     <p v-if="error" class="text-red-400">Failed to load repositories. Sorry!!! Try again later.</p>

    <!-- Repos List -->
     <ul v-if="repos.length" class="space-y-4">
      <li
        v-for="repo in repos"
        :key="repo.id"
        class="p-4 bg-[#2E3138] rounded-lg shadow hover:shadow-lg transition">
        <a :href="repo.html_url" target="_blank" class="text-xl font-semibold hover:underline">
          {{ repo.name }}
        </a>
        <p class="text-gray-300 mt-2">{{ repo.description || "No description provided." }}</p>
        <div class="text-sm mt-3 text-gray-400 flex space-x-4">
          <span v-if="repo.language">Language: {{ repo.language }}</span>
          <span>Last Updated: {{ formatDate(repo.updated_at) }}</span>
        </div>

      </li>
     </ul>
  </section>
</template>

<script>
export default {
  name: "PortfolioPage",
  data() {
    return {
      repos: [],
      loading: true,
      error: false,
    };
  },
  methods: {
    async fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/d-teasley/repos"
        );
        if (!response.ok) throw new Error("Network response was not okay.");
        const data = await response.json();
        this.repos = data;
      } catch (err) {
        console.error(err);
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
  mounted() {
    this.fetchRepos();
  },
};
</script>

<style>
/* optional styling: scroll for long lists */
ul {
  max-height: 70vh;
  overflow-y: auto;
}
</style>
