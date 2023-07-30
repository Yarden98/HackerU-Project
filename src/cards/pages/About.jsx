import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import PageHeader from "../../components/PageHeader";
import { useTheme } from "../../provider/ThemeProvider";

export default function About() {
  const { isDark } = useTheme();
  return (
    <>
      <Container sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}>
        <PageHeader
          title="About Page"
          subtitle="On this page you can find explanations about using the application"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} alignSelf="center">
            <div>
              <h2>About Business Cards:</h2>
              <p>
                Business cards are an essential marketing tool for professionals
                and businesses of all sizes. They serve as a tangible
                representation of your brand and provide a convenient way to
                exchange contact information with potential clients, partners,
                or colleagues.
              </p>

              <h2>Key Features and Benefits:</h2>
              <ol>
                <li>
                  <strong>Professional Design:</strong> Our team of experienced
                  designers can help create a visually appealing and customized
                  business card design that aligns with your brand identity.
                  From selecting the right color schemes to incorporating your
                  logo and contact details, we ensure your business cards make a
                  strong statement.
                </li>
                <li>
                  <strong>Premium Printing:</strong> We utilize state-of-the-art
                  printing techniques and top-quality materials to ensure that
                  your business cards look and feel impressive. Whether you
                  prefer a classic matte finish or a sleek glossy look, we have
                  options that will suit your preferences.
                </li>
                <li>
                  <strong>Contact Information:</strong> Your business card will
                  prominently display your name, job title, company name, phone
                  number, email address, and website. This makes it easy for
                  recipients to reach out to you and learn more about your
                  business.
                </li>
                <li>
                  <strong>Versatility:</strong> Business cards can be utilized
                  in various networking situations, including conferences, trade
                  shows, meetings, and social events. They provide a convenient
                  way to share your details and leave a lasting impression with
                  potential clients and partners.
                </li>
                <li>
                  <strong>Brand Consistency:</strong> Our business cards are
                  designed to maintain consistency with your overall brand
                  image. By incorporating your brand elements and visual
                  identity, we ensure that your business cards align seamlessly
                  with your other marketing materials.
                </li>
              </ol>

              <h2>Ordering Process:</h2>
              <p>
                Ordering your customized business cards is simple and
                hassle-free. Visit our website or contact our customer support
                team to discuss your requirements and receive a quote. Once
                you're satisfied with the design, we'll handle the printing and
                deliver the finished product to your doorstep in a timely
                manner.
              </p>

              <h2>Conclusion:</h2>
              <p>
                Investing in well-designed and professionally printed business
                cards can significantly enhance your networking efforts and help
                you make meaningful connections. At [Your Company Name], we are
                committed to delivering business cards that capture the essence
                of your brand and make a lasting impact on those who receive
                them.
              </p>
              <p>
                Browse through our portfolio, explore our customization options,
                and get started on creating business cards that will set you
                apart from the competition. Elevate your professional image with
                our top-quality business cards today!
              </p>
            </div>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              display: { md: "flex", xs: "nune" },
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/images/logo.png"
              alt="card"
              width="100%"
              height="50%"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
