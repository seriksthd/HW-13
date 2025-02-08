import React from "react";
import { createGlobalStyle } from "styled-components";

export default function About() {
  return (
    <div>
      <StyleGlobal />
      <div class="sc-ghWlax crFHNw">
        <div class="sc-kLhKbu ddXbWN">
          <h1 class="sc-ixGGxD cumKdt">Биз жөнүндө</h1>
          <div class="sc-khLCKb hpkJWC">
            <p>
              <strong>Alma Shop</strong> - Кыргызстандагы алдыңкы
              техноплатформа, Apple компаниясынын бардык популярдуу продукттарын
              сатууга адистешкен. Биздин максат - заманбап технологияларды жана
              сапаттуу электроника буюмдарын өлкөбүздөгү ар бир адамга
              жеткиликтүү кылуу.
            </p>
            <p>
              Компаниябыздын негизги принциптери - сапат, ишенимдүүлүк жана
              кардарлар менен узак мөөнөттүү кызматташтык. Биз сизге эң жаңы
              моделдерди жана техникалык жаңылыктарды сунуштайбыз, ар бир
              продуктубуздун сапаты жана оригиналдыгы боюнча кепилдик беребиз.
            </p>
            <h2 class="sc-dstKZu hXjnsV">Биздин максаттар:</h2>
            <ul>
              <li>
                <strong>Ишене ала турган сапат</strong> - Биз Apple
                компаниясынын эң акыркы жана популярдуу өнүмдөрүн сунуштайбыз,
                ар бир товар толугу менен текшерилип, оригиналдуу болуп саналат.
              </li>
              <li>
                <strong>Жогорку деңгээлде тейлөө</strong> - Кардарлардын
                муктаждыктарын жана күтүүлөрүн эң жогорку деңгээлде
                канааттандыруу үчүн бардык кызматтарды сапаттуу көрсөтүүгө
                аракет кылабыз.
              </li>
              <li>
                <strong>Икономикалык жеткиликтүүлүк</strong> - Биз жаңы жана
                инновациялык технологияларды арзан баада сунуштап, сатып
                алуучуларга жагымдуу шарттарды түзөбүз.
              </li>
              <li>
                <strong>Технологиялык жаңылануу</strong> - Жаңы өнүмдөр менен ар
                дайым жаңылап, ар бир кардарга дүйнө жүзү боюнча эң мыкты
                техникаларды алып келүүнү максат кылабыз.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
const StyleGlobal = createGlobalStyle`
.crFHNw {
  background-color: rgb(249, 249, 249);
 color: rgb(51, 51, 51);
  padding: 40px 20px;
 height: 100vh;
}
.ddXbWN {
  max-width: 800px;
  margin: 0px auto;
  text-align: center;
}
.cumKdt {
  font-size: 2.5rem;
  font-weight: 600;
  color: rgb(10, 132, 255);
  margin-bottom: 20px;
}
.hpkJWC {
  font-size: 1.125rem;
  line-height: 1.6;
  color: rgb(51, 51, 51);
  text-align: left;
}
.hXjnsV {
  font-size: 1.75rem;
  font-weight: 600;
  color: rgb(51, 51, 51);
  margin-top: 30px;
  margin-bottom: 20px;
}
.hpkJWC ul {
  list-style: none;
  padding-left: 0px;
  font-size: 1.125rem;
  color: rgb(102, 102, 102);
}
.hpJWC ul li {
  margin-bottom: 12px;
line-height: 1.5;
}
.hpkJWC ul strong {
  font-weight: 600;
  color: rgb(10, 132, 255);
}
`;
