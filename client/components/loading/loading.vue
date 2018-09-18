<template>
<div class="container">
  <div class="spinner">
    <div class="dot1"></div>
    <div class="dot2"></div>
  </div>
</div>
</template>

<style lang="stylus" scoped>
.container{
  width 100%
  height 100%
  position absolute
  z-index 100
  background rgba(0,0,0,.2)
  top 0
}
.spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
  animation: sk-rotate 2.0s infinite linear;
}

.dot1, .dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
  border-radius: 100%;

  animation: sk-bounce 2.0s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  animation-delay: -1.0s;
}

@keyframes sk-rotate { 100% { transform: rotate(360deg); }}


@keyframes sk-bounce {
  0%, 100% {
    transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
  }
}
</style>

