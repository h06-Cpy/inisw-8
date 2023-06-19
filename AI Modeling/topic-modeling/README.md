# Topic-modeling

![image](https://github.com/ugiugi0823/topic-modeling/assets/106899647/9f515358-a9c3-48cb-93d4-953145f7c6e7)


### 코랩으로 쉽게 돌려보기
- 순서대로 돌려주세요!

<br/>


구글 드라이브 연결하기
```
from google.colab import drive
drive.mount('/content/drive')
```
<br/><br/>


깃 허브 레포 가져오기
```
!git clone https://github.com/ugiugi0823/topic-modeling.git
%cd topic-modeling
```
<br/><br/>



## 🔥 `.sh` 파일을 수정해야 해요!🔥
- .sh 파일에 들어가면 설명해 놓았습니다.!
- RAM 용량이 80GB 그 아래라면, 절대 돌아가지 않습니다.!

<br/>

Bertopic모델을 얻기, 시간이 오래 걸립니다.!
```
!bash run.sh
```
<br/><br/>




결과 확인
```
from PIL import Image
import matplotlib.pyplot as plt
image = Image.open('/content/drive/MyDrive/inisw08/bertopic/barchart/ugiugi-inisw08-T5-mlm-adafactor_testpreproc_6_2_barchart.png')
plt.imshow(image)
plt.axis('off')  
plt.show()
```















