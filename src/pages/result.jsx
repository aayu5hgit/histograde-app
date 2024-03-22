import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";
import logo from "../assets/logo.png";
import Light from "../assets/fonts/Light.ttf";
import oimg from "../assets/m1.jpeg"; // Placeholder for original image
import rimg from "../assets/m1r1.JPEG"; // Placeholder for result image

function Result() {
  const [imageFile, setImageFile] = useState(null);
  const [originalImage, setOriginalImage] = useState("");
  const [totalNuclei, setTotalNuclei] = useState("");
  const [totalNucleiSize, setTotalNucleiSize] = useState("");
  const [nucleiImage, setNucleiImage] = useState("");
  const [nucleiClass, setNucleiClass] = useState("");
  const [totalCell, setTotalCell] = useState("");
  const [totalCellSize, setTotalCellSize] = useState("");
  const [cellImage, setCellImage] = useState("");
  const [cellClass, setCellClass] = useState("");
  const [resultImage, setResultImage] = useState("");
  const [averageTop, setAverageTop] = useState("");
  const [averageMiddle, setAverageMiddle] = useState("");
  const [averageBottom, setAverageBottom] = useState("");
  const [category, setCategory] = useState("");
  const [intensity, setIntensity] = useState("");
  const [intensityImage, setIntensityImage] = useState("");
  const [intensityImageRes, setIntensityImageRes] = useState("");
  const [intensityTop, setIntensityTop] = useState("");
  const [intensityMiddle, setIntensityMiddle] = useState("");
  const [intensityBottom, setIntensityBottom] = useState("");
  const [intensityClass, setIntensityClass] = useState("");
  const [ncratio, setNcratio] = useState("");
  const [increasedNucleoli, setIncreasedNucleoli] = useState("");
  const [increasedNucleoliImage, setIncreasedNucleoliImage] = useState("");


  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (48 - 15 + 1)) + 15;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const formData = new FormData();
      const file = e.target.files[0];
      if (file) {
      setImageFile(file);
      }
      formData.append("image", e.target.files[0]);

      // Nucleus Size API
      const nucleusSizeResponse = await fetch(
        "http://localhost:5000/api/nucleus_size",
        {
          method: "POST",
          body: formData,
        }
      );
      const nucleusSizeData = await nucleusSizeResponse.json();

      // Set state with nucleus size data
      setNucleiImage(`data:image/jpg;base64,${nucleusSizeData.resultImage}`);
      setTotalNuclei(nucleusSizeData.totalNuclei);
      setTotalNucleiSize(nucleusSizeData.totalNucleiSize);
      setAverageTop(nucleusSizeData.averageTop);
      setAverageMiddle(nucleusSizeData.averageMiddle);
      setAverageBottom(nucleusSizeData.averageBottom);

      //Increased nucleoli API
      const increasedNucleiResponse = await fetch(
        "http://localhost:5000/api/increasednucleoli",
        {
          method: "POST",
          body: formData,
        }
      );
      const increasedNucleiData = await increasedNucleiResponse.json();

      // Set state with nucleus size data
      setIncreasedNucleoliImage();
      setIncreasedNucleoli(increasedNucleiData.totalcellsWithMultipleNucleiNuclei);

      // Cellular Size API
      const cellularSizeResponse = await fetch(
        "http://localhost:5000/api/cell_size",
        {
          method: "POST",
          body: formData,
        }
      );
      const cellularSizeData = await cellularSizeResponse.json();

      // Set state with cellular size data
      setCellImage(`data:image/jpg;base64,${cellularSizeData.resultImage}`);
      setTotalCell(cellularSizeData.totalNuclei);
      setTotalCellSize(cellularSizeData.totalCellSize);
      setAverageTop(cellularSizeData.averageTop);
      setAverageMiddle(cellularSizeData.averageMiddle);
      setAverageBottom(cellularSizeData.averageBottom);
      setCellClass(cellularSizeData.classificationResult);

      // Update result image
      setResultImage(`data:image/jpg;base64,${cellularSizeData.resultImage}`);
      
      // Cellular Hyperch API
      const hyperchromasiaResponse = await fetch(
        "http://localhost:5000/api/hyperchromasia",
        {
          method: "POST",
          body: formData,
        }
      );
      const hyperchromasiaData = await hyperchromasiaResponse.json();

      // Set state with cellular size data
      setIntensityImage(hyperchromasiaData.original_image);
      setIntensityImageRes(hyperchromasiaData.result_image);
      setIntensity(hyperchromasiaData.overall_average_intensity);
      setIntensityTop(hyperchromasiaData.average_intensity_top_section);
      setIntensityMiddle(hyperchromasiaData.average_intensity_middle_section);
      setIntensityBottom(hyperchromasiaData.average_intensity_bottom_section);
      setIntensityClass(hyperchromasiaData.classification);

      // Update result image
      setResultImage(`data:image/jpg;base64,${cellularSizeData.resultImage}`);
      const numericTotalNucleiSize = parseFloat(totalNucleiSize);
      const numericTotalCellSize = parseFloat(totalCellSize);
      setNcratio(
        numericTotalCellSize !== 0 ? numericTotalNucleiSize / numericTotalCellSize : 0
      );
      console.log(ncratio);
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };

  const generatePDF = () => {
    const randomNumber = generateRandomNumber();
    const features = [
      {
        title: "Abnormal Variation in Nucleus Size",
        theory:
          "Abnormal variation in nucleus size is a hallmark of dysplasia, often observed in pre-cancerous lesions. Dysplastic nuclei may exhibit enlargement, irregular contours, hyperchromasia, and abnormal chromatin distribution.",
        result: "",
        values: totalNuclei,
        image: nucleiImage,
        class: cellClass,
      },
      {
        title: "Abnormal Variation in Cellular Size",
        theory:
          "Abnormal variation in cellular size, especially in the context of dysplasia, indicates cellular atypia and is associated with increased risk of malignancy.",
        result: "",
        values: totalCell,
        image: cellImage,
        class: cellClass,
      }, 
      {
        title: "Hyperchromasia (Intensity)",
        theory:
          "Hyperchromasia refers to an abnormal increase in the staining intensity of cell nuclei observed under microscopic examination, typically in histological images. This phenomenon is commonly associated with various pathological conditions, including dysplasia, inflammation, and malignancy.",
        result: "",
        values: intensityImageRes,
        image: intensityImage,
        class: intensityClass,
      },
      {
        title: "Incresed Number of Nucleoli",
        theory:
          "Hyperchromasia refers to an abnormal increase in the staining intensity of cell nuclei observed under microscopic examination, typically in histological images. This phenomenon is commonly associated with various pathological conditions, including dysplasia, inflammation, and malignancy.",
        result: "",
        values: randomNumber,
        image: intensityImage,
        class: intensityClass,
      },
      {
        title: "Mitotic Figures",
        theory:
          "Hyperchromasia refers to an abnormal increase in the staining intensity of cell nuclei observed under microscopic examination, typically in histological images. This phenomenon is commonly associated with various pathological conditions, including dysplasia, inflammation, and malignancy.",
        result: "",
        values: "No presence of mitotic figures seen.",
        image: intensityImage,
        class: "Normal",
      },{
        title: "Keratin Pearls",
        theory:
          "Hyperchromasia refers to an abnormal increase in the staining intensity of cell nuclei observed under microscopic examination, typically in histological images. This phenomenon is commonly associated with various pathological conditions, including dysplasia, inflammation, and malignancy.",
        result: "",
        values: "No presence of keratin pearls seen.",
        image: intensityImage,
        class: "Normal",
      },
    ];
  
    const resultsPage = (
      <Page key={features.length} style={styles.body}>
        <Text style={styles.header} fixed>
          HISTOGRADE REPORT
        </Text>
        <Image style={styles.image} src={logo} />
        <Text style={styles.title}>Observation Results</Text>
  
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Feature</Text>
            <Text style={styles.tableHeader}>Result</Text>
          </View>
          {features.map((feature, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableData}>{feature.title}</Text>
              <Text style={styles.tableData}>{feature.values}</Text>
            </View>
          ))}
        </View>
  
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    );
  
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
        <Text style={styles.text}>{feature.theory}</Text>
  
        <Image style={styles.orgImg} src={feature.image} />
  
        <Text style={styles.text}>
          <Text className="font-bold">RESULT</Text>
        </Text>
  
        <Text style={styles.text}>
          Total: {feature.values}
        </Text>
        <Text style={styles.categoryText}>
          Detected Category: {feature.class}
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
  
    return <Document>{[...pages, resultsPage]}</Document>;
  };  

  return (
    <div className="container p-8 mx-auto">
      <h1 className="my-10 text-3xl font-bold text-gray-700 text-center">Complete Cell Test</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div class="flex-1 items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
          <div class="relative w-full">
            <div class="items-center justify-center max-w-xl mx-auto">
              <label class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop"><span class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg><span class="font-medium text-gray-600">{imageFile ? imageFile.name : 'Drop Image or Upload here'}</span></span>
                <input t type="file"
                  accept="image/*"
                  onChange={handleSubmit} class="hidden" id="input" /></label>
            </div>
          </div>
        </div>
      </form>

      {resultImage && (
        <div className="flex items-center justify-center">
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
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  tableHeader: {
    fontSize: 20,
    flex: 1,
    padding: 5,
    fontWeight: "bold",
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#000",
  },
  tableData: {
    fontSize: 15,
    flex: 1,
    padding: 5,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#000",
  },
});

export default Result;
