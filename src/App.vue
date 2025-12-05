<template>
  <div id="app" class="min-h-screen flex flex-col bg-[#1E1E1E] text-gray-100">

    <!-- Header -->
  <header class="bg-[#AB67A1] text-white px-6 py-4 flex justify-between items-center w-full fixed top-0 left-0 z-50 shadow-md">
  <router-link to="/">
    <h1 class="text-2xl font-bold tracking-wide cursor-pointer">Dalton Teasley</h1>
  </router-link>
    <nav class="space-x-4">
      <router-link to="/about" class="hover:text-gray-200 transition">About</router-link>
      <router-link to="/portfolio" class="hover:text-gray-200 transition">Portfolio</router-link>
      <router-link to="/contact" class="hover:text-gray-200 transition">Contact</router-link>
      <router-link to="/surprise" class="hover:text-gray-200 transition">Click Here !!</router-link>
    </nav>
  </header>

    <!-- Main content -->
    <main class="flex-grow mt-24">
      <router-view /> <!-- Where each page renders -->
    </main>

    <!-- Footer -->
    <footer class="bg-[#AB67A1] text-white text-center p-4 w-full">
      <p class="text-sm md:text-base">&copy; 2025 Dalton Teasley | 
        <a href="https://github.com/d-teasley" class="underline hover:text-gray-200 transition">GitHub</a> • 
        <a href="https://linkedin.com/in/dalton-teasley-dt017" class="underline hover:text-gray-200 transition">LinkedIn</a>
      </p>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* global styles stay here */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

#app {
  font-family: 'Poppins', 'Inter', sans-serif;
}
</style>
