<template>
<main class="tab">
<div className="tab__content">
  <slot />
</div>
</main>  
</template>


<style scoped>
.tab {
    width: 30%;
    height: 1024px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.tab__content {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 768px) {
    .tab {
        width: 100%;
    }
}
</style>