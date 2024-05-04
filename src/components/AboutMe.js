import React from "react";
// I have created this json file to follow dry principle
import ceritificateData from "../static-text/about-me.json";
// we do not currently have the pictures ready so once we have the picture I will update it.
import aboutMeImg1 from "../images/intro/rotterdam-profil.jpeg";
import {
  SectionWrapper,
  SectionTitleWrapper,
  SectionContentWrapper,
  SectionContent,
  SectionTitle,
  SectionSubTitle,
  SectionParagraph,
  SectionContentPart,
} from "../ui/appSections";
import {
  AboutMeImg,
  AboutMeList,
  AboutMeListPoint,
  AboutMeParagraph,
  AboutMeSecondSection,
} from "../ui/aboutMeStyledComponents";

function AboutMe() {
  return (
    <SectionWrapper id="Hakkımızda">
      <SectionTitleWrapper>
        <SectionTitle>Hakkımızda</SectionTitle>
      </SectionTitleWrapper>
      <SectionContentWrapper>
        <SectionContent>
          <SectionContentPart>
            <SectionSubTitle>Fahri Erbulak kimdir ?</SectionSubTitle>
            <SectionParagraph>
              Dil ve Konuşma Terapisti Fahri Erbulak, 25.01.1999 Lefkoşa
              doğumlu. Lisans eğitimini Yakın Doğu Üniversitesi Sağlık Bilimleri
              Fakültesi’nde başladığı eğitimini 2021 yılında tamamlayarak Dil ve
              Konuşma Terapisi unvanı almıştır.
            </SectionParagraph>
            <SectionParagraph>
              Öğretim yılı süresince Akıcı Konuşma Bozuklukları, Dil ve Konuşma
              Bozuklukları, Dil Bozuklukları alanlarını kapsayan uygulamaya
              yönelik stajlarını, Fizyomed Özel Eğitim ve Rehabilitasyon Merkezi
              (Manisa) ve Magusa Tıp Merkezinde tamamlamıştır.
            </SectionParagraph>
          </SectionContentPart>
          <SectionContentPart>
            <AboutMeImg
              src={aboutMeImg1}
              alt="will be decided with the upcoming images"
            />
          </SectionContentPart>
        </SectionContent>
        <AboutMeSecondSection>
          <SectionContentPart>
            {" "}
            <AboutMeImg
              src={aboutMeImg1}
              alt="will be decided with the upcoming images"
            />
          </SectionContentPart>
          <SectionContentPart>
            <SectionSubTitle>Başarılar</SectionSubTitle>
            <AboutMeList>
              {ceritificateData.events.map((data, index) => (
                <AboutMeListPoint key={index}>
                  <b>{data.date} tarihlerinde düzenlenen,</b>
                  <AboutMeParagraph>
                    {data.title}
                    <br></br>
                    {data.presenter}
                  </AboutMeParagraph>
                </AboutMeListPoint>
              ))}
            </AboutMeList>
          </SectionContentPart>
        </AboutMeSecondSection>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}

export default AboutMe;
