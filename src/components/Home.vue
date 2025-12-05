<template>
  <!-- Hero Section -->
  <section class="flex flex-col md:flex-row justify-center items-center flex-grow bg-[#2E3138] py-16 px-8 mt-24 mx-4 rounded-lg shadow-2xl text-center md:text-left transition-transform duration-300 hover:scale-[1.01]">
    
    <img
      src="@/assets/profile.jpeg"
      alt="Dalton Teasley"
      class="h-64 w-64 object-cover rounded-full shadow-lg mb-6 md:mb-0 md:mr-8">
    
    <div>
      <h2 class="text-4xl font-semibold mb-3 text-white">Hi, I’m Dalton!</h2>
      <p class="text-lg max-w-md text-gray-300 leading-relaxed">
        I'm into music, tech, and creating things that look and sound cool. 
        I like trying new things like making beats, messing with code, or making videos.
        Always learning, always curious, and usually caffeinated.
      </p>
    </div>
    
  </section>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* Page-specific styles here */
</style>
