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
  const [mainClass, setMainClass] = useState("");
  const [NCRatio, setNCRatio] = useState("");
  const [mitosisClass, setMitosisClass] = useState("");
  const [mitosisImage, setMitosisImage] = useState("");
  const [keratinClass, setKeratinClass] = useState("");


  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (48 - 15 + 1)) + 15;
  };

  const generateID = () => {
    // Generate a random number for the report ID
    return Math.floor(100000 + Math.random() * 900000);
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


      // MODel api
      const modelres = await fetch(
        "http://localhost:5000/api/model",
        {
          method: "POST",
          body: formData,
        }
      );
      const modeldata = await modelres.json();
      setMainClass(modeldata.class);

      //ncratio api
      const ncres = await fetch(
        "http://localhost:5000/api/ncratio",
        {
          method: "POST",
          body: formData,
        }
      );
      const ncdata = await ncres.json();
      setNCRatio(ncdata.overall_average_ratio);

      //mitosis api
      const mitosisres = await fetch(
        "http://localhost:5000/api/mitosis",
        {
          method: "POST",
          body: formData,
        }
      );
      const mitosisdata = await mitosisres.json();
      setMitosisClass(mitosisdata.mitotic_figure_grade);

      // keratin api
      const keratinres = await fetch(
        "http://localhost:5000/api/keratin",
        {
          method: "POST",
          body: formData,
        }
      );
      const keratindata = await keratinres.json();
      setKeratinClass(keratindata.Keratin_Pearls_grade);
      setMitosisImage(mitosisdata.result_image);

      //Increased nucleoli API
      const increasedNucleiResponse = await fetch(
        "http://localhost:5000/api/increasednucleoli-test",
        {
          method: "POST",
          body: formData,
        }
      );
      const increasedNucleiData = await increasedNucleiResponse.json();

      // Set state with nucleus size data
      setIncreasedNucleoliImage(`data:image/jpg;base64,${increasedNucleiData.result_image}`);
      setIncreasedNucleoli(increasedNucleiData.nuclei_counts);

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
      // setResultImage(`data:image/jpg;base64,${cellularSizeData.resultImage}`);

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
      setIntensityImage(`data:image/jpg;base64,${cellularSizeData.originalImage}`);
      setIntensityImageRes(hyperchromasiaData.result_image);
      setIntensity(hyperchromasiaData.overall_average_intensity);
      setIntensityTop(hyperchromasiaData.average_intensity_top_section);
      setIntensityMiddle(hyperchromasiaData.average_intensity_middle_section);
      setIntensityBottom(hyperchromasiaData.average_intensity_bottom_section);
      setIntensityClass(hyperchromasiaData.classification);

      // // Update result image
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
    const reportID = generateID();

    const features = [
      {
        title: "Abnormal Variation in Nucleus Size",
        theory:
          "Abnormal variation in nucleus size is a hallmark of dysplasia, often observed in pre-cancerous lesions. Dysplastic nuclei may exhibit enlargement, irregular contours, hyperchromasia, and abnormal chromatin distribution.",
        result: "",
        values: totalNuclei,
        image: nucleiImage,
        class: cellClass,
        final: (cellClass === 'Mild' || cellClass === 'Moderate' || cellClass === 'Severe') ? 'abnormal' : 'normal'
      },
      {
        title: "Abnormal Variation in Cellular Size",
        theory:
          "Abnormal variation in cellular size, especially in the context of dysplasia, indicates cellular atypia and is associated with increased risk of malignancy.",
        result: "",
        values: totalCell,
        image: cellImage,
        class: cellClass,
        final: (cellClass === 'Mild' || cellClass === 'Moderate' || cellClass === 'Severe') ? 'abnormal' : 'normal'
      },
      {
        title: "Hyperchromasia (Intensity)",
        theory:
          "Hyperchromasia refers to an abnormal increase in the staining intensity of cell nuclei observed under microscopic examination, typically in histological images. This phenomenon is commonly associated with various pathological conditions, including dysplasia, inflammation, and malignancy.",
        result: "",
        values: intensity,
        image: intensityImage,
        class: intensityClass,
        final: (intensityClass === 'Mild' || intensityClass === 'Moderate' || intensityClass === 'Severe') ? 'abnormal' : 'normal'
      },
      {
        title: "Incresed Number of Nucleoli",
        theory:
          "An increased number of nucleoli in oral histopathological cells occurs when a single cell contains multiple distinct nuclei. It typically indicates increased cellular activity and proliferation. ",
        result: ".",
        values: increasedNucleoli,
        image: increasedNucleoliImage,
        class: intensityClass,
        final: (intensityClass === 'Mild' || intensityClass === 'Moderate' || intensityClass === 'Severe') ? 'abnormal' : 'normal'

      },
      {
        title: "Mitotic Figures",
        theory:
          "Abnormal mitotic figures, including atypical mitosis, in oral histopathological cells are indicative of disturbed cellular division processes. Mitosis is the process by which a cell divides to produce two identical daughter cells. Abnormalities in mitosis can be seen in various pathological conditions, including cancer.",
        result: "",
        values: "No presence of mitotic figures seen.",
        image: intensityImage,
        class: mitosisClass,
        final: (mitosisClass === 'Mild' || mitosisClass === 'Moderate' || mitosisClass === 'Severe') ? 'Presence' : 'Absence'

      },
      {
        title: "Keratin Pearls",
        theory:
          "Keratin pearls and premature keratinization in oral histopathological cells are characteristic features often observed in various oral lesions, particularly in squamous cell carcinomas.Keratin pearls are concentrically arranged masses of keratinized cells found within the tumor tissue.",
        result: "",
        values: "No presence of keratin pearls seen.",
        image: intensityImage,
        class: keratinClass,
        final: (keratinClass === 'Mild' || keratinClass === 'Moderate' || keratinClass === 'Severe') ? 'Presence' : 'Absence'

      },
      {
        title: "N:C Ratio",
        theory:
          "Nucleus to cytoplasm ratio is the increase in the nuclear size leading to reduction of the cytoplasmic area normal for the epithelial location. In oral histopathology, this ratio refers to the relative size of the nucleus compared to the cytoplasm within cells observed under a microscope.",
        result: "",
        values: NCRatio,
        image: intensityImage,
        class: mainClass,
        final: (mainClass === 'Mild' || mainClass === 'Moderate' || mainClass === 'Severe') ? 'abnormal' : 'normal'

      },
      {
        title: "Irregular Stratification",
        theory:
          "The oral mucosa typically consists of stratified squamous epithelium, which is composed of layers of cells arranged in a specific pattern: basal cells at the bottom, followed by layers of increasingly flattened cells towards the surface. Disturbance of the stratified layers of the epithelium, with haphazardly organised and difficult to distinguish layers.",
        result: ".",
        values: 0,
        image: cellImage,
        class: mainClass,
        final: (mainClass === 'Mild' || mainClass === 'Moderate' || mainClass === 'Severe') ? 'abnormal' : 'normal'

      },
    ];
    const allClasses = features.map((feature) => feature.class);
    // Count occurrences of each class
    const classCount = allClasses.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
    // Find the class with the maximum occurrences
    const finalGrade = Object.keys(classCount).reduce((a, b) =>
      classCount[a] > classCount[b] ? a : b
    );
    const resultsPage = (

      <Page key="results" style={styles.body}>
        <Text style={styles.header} fixed>
          HISTOGRADE REPORT
        </Text>
        <Image style={styles.image} src={logo} />
        <Text style={styles.title}>Observation Results</Text>

        {/* Render feature table */}
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Feature</Text>
            <Text style={styles.tableHeader}>Observations</Text>
            <Text style={styles.tableHeader}>Class</Text>
            <Text style={styles.tableHeader}>Final</Text> {/* New header */}
          </View>
          {features.map((feature, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableData}>{feature.title}</Text>
              <Text style={styles.tableData}>{feature.values}</Text>
              <Text style={styles.tableData}>{feature.class}</Text>
              <Text style={styles.tableData}>{feature.final}</Text> {/* Display final grade */}
            </View>
          ))}
          <Text style={styles.text}>
            <Text className="font-bold">Final Grade Observed: </Text>
            {finalGrade}
          </Text>

        </View>

        {/* Footer with report ID */}
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) =>
          `${pageNumber} / ${totalPages} | Report ID: ${reportID}`} fixed
        />
      </Page>
    );

    const pages = features.map((feature, index) => {
      const values = feature.values || "-"; // If feature.values is falsy, assign 0
      const category = feature.class ?? "Normal"; // If feature.class is null or undefined, assign 0

      return (
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
            Total: {values}
          </Text>
          <Text style={styles.text}>
            Detected Category: {category}
          </Text>

          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      );
    });

    return <Document>{[pages, resultsPage]}</Document>;

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

      <div className="flex items-center justify-center">
        <PDFDownloadLink
          document={generatePDF()}
          fileName="Histograde-Report.pdf"
          style={{
            textDecoration: "none",
          }}
        >
          {({ blob, url, loading, error }) => (
            <button
              className="flex p-5 mt-4 font-semibold text-white bg-pink-500 rounded hover:bg-purple-300 focus:outline-none focus:shadow-outline-blue"
              disabled={loading}
            >
              {loading ? "Generating PDF..." : "Download PDF Report"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
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