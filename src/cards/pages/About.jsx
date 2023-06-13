import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import PageHeader from "../../components/PageHeader";

export default function About() {
  return (
    <>
      <Container>
        <PageHeader
          title="About Page"
          subtitle="On this page you can find explanations about using the application"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} alignSelf="center">
            Lorem Ipsum Dolor Sit Emmett, Konsektorer Edificing Alit and
            Shabagat Livam Solgak. Bright and shrill shrill drifted, with
            flexible elements. Do you worship and take refuge in us, and you
            will receive the name - to you Morgam Borak? To tag Ishbes.
            Blackmailer in Lubbock. Take a look at Lindo for Markel S for Kimpo,
            Dol, Tzot and Meyot - for Fatiam Barshag - and for Fatiam Gaddish.
            Quiz Dumor for Yamum in Linach and Rogza. For a small amount of
            food. Lorem Ipsum Dolor Sit Emmett, Consector Adepicing Alit. Seth
            almankom nisi non prophesied. Des iacollis volupta diam. Vestibulum
            et dolor, crass agate lactus val aogo and vestibulum solisi tidum in
            Alik. Kulhae Tsopet for concoction Ivan If, Brometz Klaresht
            Mihuchus. Kalatsi for the real Karashek Sakheit Dez Ma, of you for
            the married matachin of Manoruch. Kulhae Tsopet for concoction Ivan
            If, Brometz Klaresht Mihuchus. Calaci nolum aerus sapian - Fossilis
            Quasi, Aquasman Quasi in Mr. Modoff. Oedipu Blastic is clear, in
            Neft Neft Lamson Belrak - and Anaf for the true truth, Sakhait Dez
            Ma, of you for a married methachin from Nurchguler Monferer Sobert
            Loram Shabetz Yahol, Lechnotz Berarir Gek Litz, and Shebagat. Colors
            Monfred Addendum Silkoff, exciting and touching. A replacement for
            the Bluff Kintz spray gun. Lat Tsashakhmi Tsash Bala, Mansuto Tsmelh
            Labiko Nanbi, Tsmuku Belokria Shitsma Boruk. Corus Condimentum in
            Lycra, Nunsty Clover in Recana Stum, Perikach Tetsrik Lerti.
            Constructor Adiposing Alit. Seth almankom nisi non prophesied. Des
            iacollis volupta diam. Vestibulum et dolor, crass agate lactus val
            aogo and vestibulum solisi tidum in Alik. Corus Condimentum in
            Lycra, Nunsty Clover in Recana Stum, Perikach Tetsrik Lerti. Their
            hearts were removed. Bright and shrill shrill drifted, with flexible
            elements. Do you worship and take refuge in us, and you will receive
            the name - to you Morgam Borak? To tag Ishbes. Blackmailer in
            Lubbock. Take a look at Lindo for Markel S for Kimpo, Dol, Tzot and
            Meyot - for Fatiam Barshag - and for Fatiam Gaddish. Quiz Dumor for
            Yamum in Linach and Rogza. For a small amount of food. The tie that
            sat on the couch that was tailor-made - three and a half-year-old
            man was wearing a suit and a shirt that was drying on the couch.
            Zota from the summer clean Apah Dalamat dry, Kahana Nitzacho Nimergi
            Shakhim Tok, the flap Shanra the Tidam the Kiir Kek
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              display: { md: "flex", xs: "nune" },
              justifyContent: "center",
            }}
          >
            <img src="/assets/images/logo.png" alt="card" width="1000%" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
