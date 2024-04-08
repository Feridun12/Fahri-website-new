import React from "react";
// we do not currently have the pictures ready so once we have the picture I will update it.
import aboutMeImg1 from "../images/intro/rotterdam-profil.jpeg";
import {
  SectionWrapper,
  SectionTitleWrapper,
  SectionContentWrapper,
  SectionContent,
  PageSection,
  SectionTitle,
  SectionSubTitle,
  SectionParagraph,
} from "../ui/appSections";
import {
  AboutMeImg,
  AboutMeList,
  AboutMeListPoint,
} from "../ui/aboutMeStyledComponents";

function AboutMe() {
  return (
    <SectionWrapper id="Hakkımızda">
      <SectionTitleWrapper>
        <SectionTitle>Hakkımızda</SectionTitle>
      </SectionTitleWrapper>
      <SectionContentWrapper>
        <SectionSubTitle>Fahri Erbulak kimdir ?</SectionSubTitle>
        <SectionContent>
          <SectionParagraph>
            Dil ve Konuşma Terapisti Fahri Erbulak, 25.01.1999 Lefkoşa doğumlu.
            Lisans eğitimini Yakın Doğu Üniversitesi Sağlık Bilimleri
            Fakültesi’nde başladığı eğitimini 2021 yılında tamamlayarak Dil ve
            Konuşma Terapisi unvanı almıştır.
          </SectionParagraph>
          <SectionParagraph>
            Öğretim yılı süresince Akıcı Konuşma Bozuklukları, Dil ve Konuşma
            Bozuklukları, Dil Bozuklukları alanlarını kapsayan uygulamaya
            yönelik stajlarını, Fizyomed Özel Eğitim ve Rehabilitasyon Merkezi
            (Manisa) ve Magusa Tıp Merkezinde tamamlamıştır.
          </SectionParagraph>
          <AboutMeImg
            src={aboutMeImg1}
            alt="will be decided with the upcoming images"
          />
        </SectionContent>
        <SectionContent>
          <PageSection>
            {" "}
            <AboutMeImg
              src={aboutMeImg1}
              alt="will be decided with the upcoming images"
            />
          </PageSection>
          <PageSection>
            <SectionSubTitle>Başarılar</SectionSubTitle>
            <AboutMeList>
              <AboutMeListPoint>
                <b>15-16-23 Eylül 2020 tarihlerinde düzenlenen,</b>
                <br></br>
                <br></br>
                DiL VE KONUSMA TERAPISi ALANINDA NÖROLOJiK REHABILITASYON.
                (Aybuke YILDIRIM Dil ve KonusmaTerapisti)
              </AboutMeListPoint>
              <AboutMeListPoint></AboutMeListPoint>
            </AboutMeList>
          </PageSection>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}

export default AboutMe;
