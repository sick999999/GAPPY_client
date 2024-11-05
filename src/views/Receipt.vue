<template>
  <div class="receipt-container">
    <div class="receipt">
      <img src="@/assets/images/receipt2.png" alt="Receipt Image" class="responsive-image" />
    </div>
    <div class="receipt">
      <img src="@/assets/images/receipt3.png" alt="Receipt Image" class="responsive-image" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.receipt-container {
  display: flex;
  flex-direction: column; /* 수직 방향으로 배치 */
  align-items: center; /* 가로로 가운데 정렬 */
  gap: 20px; /* 이미지 사이 간격 추가 */
  width: 100vw;
  min-height: 100vh; /* 최소 높이를 화면 전체로 설정 */
  overflow-y: auto; /* 스크롤 필요시 나타나도록 설정 */
  padding: 10px;
  box-sizing: border-box; /* 패딩을 포함하여 전체 크기 조정 */
}

.receipt {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.responsive-image {
  width: auto;
  height: 90vh; /* 이미지 높이를 화면 높이의 90%로 설정 */
  max-width: 80vw; /* 이미지 너비를 화면 너비의 90%로 설정 */
  object-fit: contain; /* 이미지 비율 유지하며 화면에 맞춤 */
}
</style>