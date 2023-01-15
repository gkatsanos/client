<div class="h-full grid grid-cols-sign-up">
  <div class="splash h-full columns-lg relative">
    <div class="absolute bottom-0 right-0 text-cyan-600 text-xs">Photo by Audinga D on Unsplash</div>
  </div>
  <div class="flex justify-center h-full flex-col mx-[150px]">
    <slot />
  </div>
</div>

<style>
  .splash {
    background-image: url('./unsplash.jpg');
    background-size: cover;
  }
</style>
