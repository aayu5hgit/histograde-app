import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Image,
  Font,
} from "@react-pdf/renderer";
import oimg from "../assets/m1.jpeg";
import rimg from "../assets/m1r1.JPEG";
import logo from "../assets/logo.png";
import Light from "../assets/fonts/Light.ttf";

function Result() {
  const [originalImage, setOriginalImage] = useState("");
  const [totalNuclei, setTotalNuclei] = useState("");
  const [averageTop, setAverageTop] = useState("");
  const [averageMiddle, setAverageMiddle] = useState("");
  const [averageBottom, setAverageBottom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Static data for demonstration
    const staticData = {
      nucleusContoursCount: 1,
      originalImage: oimg, // Static path for original image
      nucleusContoursImage: rimg, // Static path for normalized image
      averageTop: "50", // Static value for average top
      averageMiddle: "40", // Static value for average middle
      averageBottom: "45", // Static value for average bottom
    };

    setTotalNuclei(staticData.nucleusContoursCount);
    setOriginalImage(staticData.originalImage);
    setAverageTop(staticData.averageTop);
    setAverageMiddle(staticData.averageMiddle);
    setAverageBottom(staticData.averageBottom);
  };

  const generatePDF = () => {
    const features = [
      {
        title: "Abnormal Variation in Cell Size and Shape",
        theory:
          "Abnormal variation in cell size and shape is a hallmark of dysplasia, which is often observed in pre-cancerous lesions. Dysplastic cells may exhibit pleomorphism, irregular nuclear morphology, and altered nuclear-to-cytoplasmic ratio.",
        result: "Increased abnormal variation observed.",
        category: "Moderate",
      },
      {
        title: "Abnormal Variation in Nucleus Size and Shape",
        theory:
          "Abnormal variation in nucleus size and shape is another characteristic feature of dysplasia. Dysplastic nuclei often show enlargement, irregular contours, hyperchromasia, and abnormal chromatin distribution.",
        result: "Increased abnormal variation observed.",
        category: "Severe",
      },
      {
        title: "Increased Number of Nucleoli",
        theory:
          "Nucleoli are substructures within the nucleus responsible for ribosomal RNA synthesis. An increased number of nucleoli may indicate increased cellular activity and proliferation, which can be indicative of dysplastic or malignant cells.",
        result: "Elevated number of nucleoli observed.",
        category: "Severe",
      },
      {
        title: "Nuclear-to-Cytoplasmic Ratio (N:C Ratio)",
        theory:
          "The nuclear-to-cytoplasmic ratio refers to the ratio of the size of the cell nucleus to the size of the cytoplasm. An increased N:C ratio is often observed in dysplastic cells, where the nucleus occupies a larger proportion of the cell volume.",
        result: "Elevated nuclear-to-cytoplasmic ratio observed.",
        category: "Moderate",
      },
      {
        title: "Presence of Keratin Pearls",
        theory:
          "Keratin pearls are concentrically arranged masses of keratinized squamous epithelial cells often seen in well-differentiated squamous cell carcinomas. Their presence indicates terminal differentiation of neoplastic cells.",
        result: "Keratin pearls observed.",
        category: "Severe",
      },
      {
        title: "Presence of Apoptotic Mitotic Figures",
        theory:
          "Apoptotic mitotic figures are cells undergoing mitosis with morphological features of apoptosis, such as condensed chromatin and fragmented nuclei. Their presence suggests abnormal cell proliferation and turnover, characteristic of dysplasia or malignancy.",
        result: "Apoptotic mitotic figures observed.",
        category: "Moderate",
      },
    ];

    const pages = features.map((feature, index) => (
      <Page key={index} style={styles.body}>
        <Text style={styles.header} fixed>
          HISTOGRADE REPORT
        </Text>
        <Image style={styles.image} src={logo} />
        <Text style={styles.title}>Oral Pre-Cancer Grading</Text>
        <Text style={styles.author}>Overall Test</Text>

        <Text style={styles.subtitle} className="font-extrabold">
          {feature.title}
        </Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "semibold" }}></Text>
          {feature.theory}
        </Text>

        <Image style={styles.orgImg} src={originalImage} />

        <Text style={styles.text}>
          <Text className="font-bold">Result:</Text> {feature.result}
        </Text>
        <Text style={styles.categoryText}>
          Detected Category: {feature.category}
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    ));

    const pdf = <Document>{pages}</Document>;

    console.log(pdf);
    return pdf;
  };

  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-gray-700">Overall Result</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <label className="block mb-2 text-sm font-semibold">Image File:</label>
        <input
          type="file"
          accept="image/*"
          className="w-30% p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
        />
        <button
          type="submit"
          className="flex px-4 py-2 mt-4 text-white bg-pink-500 rounded hover:bg-purple-300 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </form>

      {originalImage && (
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            <div>
              <div className="w-full justify-center cursor-pointer rounded-l-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                <div className="p-10 text-2xl font-semibold text-center">
                  <h1>Result</h1>
                  <p className="text-5xl font-semibold">Category: Moderate</p>
                </div>
              </div>
            </div>
          </div>
          <PDFDownloadLink
            document={generatePDF()}
            fileName="Histograde-Report.pdf"
          >
            {({ blob, url, loading, error }) => (
              <button className="flex p-5 mt-4 font-semibold text-white bg-pink-500 rounded hover:bg-purple-300 focus:outline-none focus:shadow-outline-blue">
                {loading ? "Generating PDF..." : "Download PDF Report"}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
}
// Font.register({
//     family: 'Oswald',
//     src: {Light}
//   });
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 50,
    fontFamily: "Times-Roman",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 15,
    margin: 12,
    fontWeight: "bold",
  },
  text: {
    margin: 12,
    fontSize: 12,
    textAlign: "justify",
  },
  boldText: {
    margin: 12,
    fontSize: 15,
    textAlign: "justify",
    fontFamily: "Times-Roman",
    fontWeight: "bold",
  },
  image: {
    marginVertical: 10,
    height: 30,
    width: 30,
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  orgImg: {
    marginVertical: 15,
    height: 150,
    width: 150,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  categoryText: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Times-Roman",
    color: "#FF4500",
    fontStyle: "bold",
  },
});

export default Result;
