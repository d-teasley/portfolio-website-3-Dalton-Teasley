<template>
  <section class="flex flex-col items-center p-8 text-gray-100">
    <h1 class="text-4xl font-bold mb-4">Snake</h1>

    <div class="mb-4 text-lg">Score: {{ score }}</div>

    <div
      class="relative inline-block p-4 rounded-xl shadow-lg"
      :style="{
        backgroundColor: '#2E3138',
        border: '1px solid #444',
      }"
    >
      <canvas
        ref="canvas"
        width="400"
        height="400"
        class="rounded-lg"
        :style="{ border: '1px solid #444' }"
      ></canvas>
    </div>

    <p class="text-sm mt-4 opacity-70">Use the arrow keys to move.</p>
  </section>
</template>

<script>
export default {
  name: "GamePage",

  data() {
    return {
      ctx: null,
      tileSize: 20,
      snake: [{ x: 10, y: 10 }],
      direction: { x: 1, y: 0 },
      food: { x: 5, y: 5 },
      score: 0,
      gameInterval: null,
      speed: 130,
    };
  },

  methods: {
    startGame() {
      const canvas = this.$refs.canvas;
      this.ctx = canvas.getContext("2d");

      window.addEventListener("keydown", this.handleKey);

      this.spawnFood();
      this.gameInterval = setInterval(this.gameLoop, this.speed);
    },

    handleKey(e) {
      switch (e.key) {
        case "ArrowUp":
          if (this.direction.y !== 1) this.direction = { x: 0, y: -1 };
          break;
        case "ArrowDown":
          if (this.direction.y !== -1) this.direction = { x: 0, y: 1 };
          break;
        case "ArrowLeft":
          if (this.direction.x !== 1) this.direction = { x: -1, y: 0 };
          break;
        case "ArrowRight":
          if (this.direction.x !== -1) this.direction = { x: 1, y: 0 };
          break;
      }
    },

    gameLoop() {
      const head = {
        x: this.snake[0].x + this.direction.x,
        y: this.snake[0].y + this.direction.y,
      };

      if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
        this.resetGame();
        return;
      }

      if (this.snake.some(seg => seg.x === head.x && seg.y === head.y)) {
        this.resetGame();
        return;
      }

      this.snake.unshift(head);

      if (head.x === this.food.x && head.y === this.food.y) {
        this.score++;
        this.spawnFood();
      } else {
        this.snake.pop();
      }

      this.draw();
    },

    spawnFood() {
      this.food = {
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20),
      };
    },

    draw() {
      const ctx = this.ctx;

      // full game board background
      ctx.fillStyle = "#1E1E1E";
      ctx.fillRect(0, 0, 400, 400);

      // snake
      ctx.fillStyle = "#AB67A1";
      this.snake.forEach(seg => {
        ctx.fillRect(
          seg.x * this.tileSize,
          seg.y * this.tileSize,
          this.tileSize - 1,
          this.tileSize - 1
        );
      });

      // food (lighter accent)
      ctx.fillStyle = "#C985BF";
      ctx.fillRect(
        this.food.x * this.tileSize,
        this.food.y * this.tileSize,
        this.tileSize - 1,
        this.tileSize - 1
      );
    },

    resetGame() {
      this.score = 0;
      this.snake = [{ x: 10, y: 10 }];
      this.direction = { x: 1, y: 0 };
      this.spawnFood();
    },
  },

  mounted() {
    this.startGame();
  },

  beforeUnmount() {
    clearInterval(this.gameInterval);
    window.removeEventListener("keydown", this.handleKey);
  },
};
</script>

<style scoped>
canvas {
  image-rendering: pixelated;
}
</style>
