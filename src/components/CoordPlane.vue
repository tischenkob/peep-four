<template>
  <div id="coords">
    <svg width="250" height="250" xmlns="http://www.w3.org/2000/svg" viewBox="-125 -125 250 250">
      <!-- axes -->

      <line x1="-125" x2="125" y1="0" y2="0" />
      <line x1="0" x2="0" y1="-125" y2="125" />

      <!-- arrows -->

      <polyline points="-5,-115 0,-125 5,-115" />
      <polyline points="115,5 125,0 115,-5" />

      <!-- marks -->

      <line x1="-20" x2="-20" y1="5" y2="-5" />
      <line x1="-40" x2="-40" y1="5" y2="-5" />
      <line x1="-60" x2="-60" y1="5" y2="-5" />
      <line x1="-80" x2="-80" y1="5" y2="-5" />
      <line x1="-100" x2="-100" y1="5" y2="-5" />

      <line x1="20" x2="20" y1="5" y2="-5" />
      <line x1="40" x2="40" y1="5" y2="-5" />
      <line x1="60" x2="60" y1="5" y2="-5" />
      <line x1="80" x2="80" y1="5" y2="-5" />
      <line x1="100" x2="100" y1="5" y2="-5" />

      <line y1="20" y2="20" x1="5" x2="-5" />
      <line y1="40" y2="40" x1="5" x2="-5" />
      <line y1="60" y2="60" x1="5" x2="-5" />
      <line y1="80" y2="80" x1="5" x2="-5" />
      <line y1="100" y2="100" x1="5" x2="-5" />

      <line y1="-20" y2="-20" x1="5" x2="-5" />
      <line y1="-40" y2="-40" x1="5" x2="-5" />
      <line y1="-60" y2="-60" x1="5" x2="-5" />
      <line y1="-80" y2="-80" x1="5" x2="-5" />
      <line y1="-100" y2="-100" x1="5" x2="-5" />

      <!-- -->
    </svg>
  </div>
</template>

<script>
export default {
  name: "CoordPlane",
  props: {},
  components: {}
};
</script>

<style scoped>
svg {
  stroke: rgb(53, 53, 53);
  stroke-width: 2px;
}
</style>