<template lang="md">
  ## このサイトについて

kalimotxoの個人ブログ

  ## About kalimotxo

engineer

### hobby

プログラミング、ジャグリング、ジョギング、筋トレ、エレクトーン、

### skill

Python, C, C#, Shell Script, JavaScript, TypeScript, CSS, HTML

AZ-900, AZ-500, PL-900

</template>

<script>
import HeadMixin from '~/mixins/HeadMixin'

export default {
  mixins: [HeadMixin],

  data() {
    return {
      head: {
        title: 'このサイトについて'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 24px;
}

h3 {
  margin-top: 16px;
}
</style>
