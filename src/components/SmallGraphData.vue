<template>
  <div id="app">
    <!-- Main Menu -->
    <div id="menu" style="">
      <button
        id="button A"
        style="width: 50px; height: 40px; margin-left: 95px"
        @click="selectTab('A')"
      >
        A
      </button>
      <div class="vl" style="margin-left: 120px"></div>
      <hr
        style="
          width: 194px;
          margin-left: 22px;
          margin-top: 1px;
          margin-bottom: 1px;
        "
      />
    </div>
    <div class="container">
      <div class="vl-1" style=""></div>
      <div class="vl-2" style=""></div>
      <div class="vl-3" style=""></div>
    </div>
    <div id="Submenu" style="">
      <button
        id="button C"
        style="width: 50px; height: 40px"
        @click="selectTab('C')"
      >
        C
      </button>
      <button
        id="button B"
        style="width: 50px; height: 40px; margin-left: 45px"
        @click="selectTab('B')"
      >
        B
      </button>
      <button
        id="button D"
        style="width: 50px; height: 40px; margin-left: 45px"
        @click="selectTab('D')"
      >
        D
      </button>
    </div>
    <div class="vl-4" style="margin-left: 120px"></div>
    <hr
      style="
        width: 194px;
        margin-left: 22px;
        margin-top: 1px;
        margin-bottom: 1px;
      "
    />
    <div class="container">
      <div class="vl-5" style=""></div>
      <div class="vl-6" style=""></div>
      <div class="vl-7" style=""></div>
    </div>
    <!-- Sub Menu for B -->
    <div>
      <button
        id="button B-1"
        style="width: 50px; height: 40px"
        @click="selectTab('B-1')"
      >
        B-1
      </button>
      <button
        id="button B-2"
        style="width: 50px; height: 40px; margin-left: 45px"
        @click="selectTab('B-2')"
      >
        B-2
      </button>
      <button
        id="button B-3"
        style="width: 50px; height: 40px; margin-left: 45px"
        @click="selectTab('B-3')"
      >
        B-3
      </button>
    </div>

    <!-- Description Section -->
    <div id="description" v-if="selectedTab">
      <button id="button clear" @click="clearSelection">X</button>
      <h2>{{ description.title }}</h2>
      <p>{{ description.text }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SmallGraphData",
  setup() {
    // Reactive references for managing state
    const selectedTab = ref(null);

    // JSON data for descriptions
    const descriptions = {
      A: { title: "A", text: "This is a description of A" },
      B: { title: "B", text: "This is a description of B" },
      C: { title: "C", text: "This is a description of C" },
      D: { title: "D", text: "This is a description of D" },
      "B-1": { title: "B-1", text: "This is a description of B-1" },
      "B-2": { title: "B-2", text: "This is a description of B-2" },
      "B-3": { title: "B-3", text: "This is a description of B-3" },
    };

    // Reactive description data
    const description = ref({ title: "", text: "" });

    // Function to handle tab selection
    const selectTab = (tab) => {
      selectedTab.value = tab;
      description.value = descriptions[tab] || { title: "", text: "" };
    };

    // Function to clear the selection
    const clearSelection = () => {
      selectedTab.value = null;
      description.value = { title: "", text: "" };
    };

    return {
      selectedTab,
      description,
      selectTab,
      clearSelection,
    };
  },
};
</script>

<style scoped>
#menu button,
#submenu button {
  margin-right: 10px;
}

#description {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  width: 200px;
}
.vl {
  border-left: 1px solid;
  height: 50px;
}
.vl-1 {
  border-left: 1px solid;
  height: 50px;
  margin-left: 25px;
}
.vl-2 {
  border-left: 1px solid;
  height: 50px;
  margin-left: 97px;
}
.vl-3 {
  border-left: 1px solid;
  height: 50px;
  margin-left: 93px;
}
.vl-4 {
  border-left: 1px solid;
  height: 50px;
}
.vl-5 {
  border-left: 1px solid;
  height: 50px;
  margin-left: 25px;
}
.vl-6 {
  border-left: 1px solid;
  height: 50px;
  margin-left: 97px;
}
.vl-7 {
  border-left: 1px solid;
  height: 50px;
  margin-left: 93px;
}
.container {
  display: flex;
}
</style>
