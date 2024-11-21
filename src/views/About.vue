<template>
  <div class="container">
    <iframe class="iframe" width="900" height="570" src="https://www.youtube.com/embed/Efkbr08QEFM?si=ky9sy38u6gP-FFbk"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div class="container-text">
      'Everything Can Be Scanned'<br>
      현대사회는 접하는 모든 것을 기록하고 Data로 저장합니다. 모든 것을 읽어내는 ‘일상의 바코드화’는 AI의 등장과 함께 가파른 속도로 진행되고 있습니다.
      뉴스를 읽을 때도 마찬가지로 체류 시간, 반응 여부 등을 모두 기록합니다. 기록을 분석하고 추적하면 패턴이 만들어집니다. 패턴을 통해 예측하는 알고리즘이 주는 편리함은 중독적이지만 개인간 인식의 격차는
      더욱 깊어지고 있습니다.
      GAPPY는 알고리즘 편향에서 벗어나 더 많은 관점을 포용하고자 하는 Project입니다. 개인이 읽은 기사를 토대로 관심사를 추적하고 그가 속한 세계 밖의 기사를 찾아서 추천합니다.
      편향된 세계에서의 탈출은 ‘너’와 ‘나’의 Gap을 좁히고, 스스로의 세계를 확장하는 방법일지도 모른다는 믿음으로
    </div>
  </div>


</template>

<script>
</script>

<style>
.container {
  align-items: left;
  position: relative;
  max-width: 100vw;
  margin-top: 20px;
}

.container-text {
  position: absolute;
  top: 290px;
  left: 1020px;
  width: 800px;
  margin-top: 2rem;
  font-size: 1.25rem;
  font-family: "Noto Serif KR", serif, Georgia;
  text-align: justify;
  line-height: 1.8rem;
  letter-spacing: -1px;
  font-weight: 450;
}

.iframe {
  margin-top: 0px;
  margin-left: 20px;
}
</style>
