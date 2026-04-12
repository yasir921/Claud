import { CVData } from "@/types/cv";

function formatDateForPDF(date: string): string {
  if (!date) return "";
  const [year, month] = date.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export async function generatePDF(data: CVData): Promise<void> {
  const { Document, Page, Text, View, StyleSheet, pdf, Font } = await import(
    "@react-pdf/renderer"
  );

  Font.register({
    family: "Helvetica",
    fonts: [
      { src: "Helvetica" },
      { src: "Helvetica-Bold", fontWeight: "bold" },
    ],
  });

  const colors = {
    navy: "#0A1628",
    gold: "#C8A45C",
    gray: "#666666",
    lightGray: "#999999",
    white: "#FFFFFF",
    black: "#333333",
  };

  const styles = StyleSheet.create({
    page: {
      padding: 40,
      fontFamily: "Helvetica",
      fontSize: 10,
      color: colors.black,
    },
    header: {
      marginBottom: 16,
      paddingBottom: 12,
      borderBottomWidth: 2,
      borderBottomColor: data.selectedTemplate === "classic" ? colors.black : colors.gold,
    },
    name: {
      fontSize: data.selectedTemplate === "executive" ? 26 : 22,
      fontWeight: "bold",
      color: colors.navy,
      textTransform: data.selectedTemplate === "executive" ? "uppercase" : "none",
      letterSpacing: data.selectedTemplate === "executive" ? 2 : 0,
      textAlign: data.selectedTemplate === "executive" ? "center" : "left",
    },
    jobTitle: {
      fontSize: 12,
      color: data.selectedTemplate === "classic" ? colors.gray : colors.gold,
      marginTop: 2,
      fontWeight: "bold",
      textTransform: data.selectedTemplate === "executive" ? "uppercase" : "none",
      letterSpacing: data.selectedTemplate === "executive" ? 1.5 : 0,
      textAlign: data.selectedTemplate === "executive" ? "center" : "left",
    },
    contactRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
      marginTop: 8,
      justifyContent: data.selectedTemplate === "executive" ? "center" : "flex-start",
    },
    contactItem: {
      fontSize: 8,
      color: colors.lightGray,
    },
    section: {
      marginTop: 14,
    },
    sectionTitle: {
      fontSize: 10,
      fontWeight: "bold",
      color: data.selectedTemplate === "classic" ? colors.black : colors.gold,
      textTransform: "uppercase",
      letterSpacing: 1.5,
      marginBottom: 8,
      paddingBottom: 3,
      borderBottomWidth: 1,
      borderBottomColor: data.selectedTemplate === "classic" ? "#dddddd" : colors.gold,
    },
    summaryText: {
      fontSize: 9,
      lineHeight: 1.6,
      color: colors.gray,
      fontStyle: data.selectedTemplate === "executive" ? "italic" : "normal",
    },
    expEntry: {
      marginBottom: 10,
      paddingLeft: data.selectedTemplate === "executive" ? 10 : 0,
      borderLeftWidth: data.selectedTemplate === "executive" ? 2 : 0,
      borderLeftColor: colors.gold,
    },
    expHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    expPosition: {
      fontSize: 10,
      fontWeight: "bold",
      color: colors.navy,
    },
    expCompany: {
      fontSize: 9,
      color: data.selectedTemplate === "classic" ? colors.gray : colors.gold,
    },
    expDate: {
      fontSize: 8,
      color: colors.lightGray,
    },
    expDescription: {
      fontSize: 8.5,
      lineHeight: 1.5,
      color: colors.gray,
      marginTop: 3,
    },
    eduEntry: {
      marginBottom: 6,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    eduDegree: {
      fontSize: 10,
      fontWeight: "bold",
      color: colors.navy,
    },
    eduSchool: {
      fontSize: 8,
      color: colors.lightGray,
    },
    skillsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 6,
    },
    skillTag: {
      fontSize: 8,
      backgroundColor: data.selectedTemplate === "modern" ? colors.navy : "transparent",
      color: data.selectedTemplate === "modern" ? colors.white : colors.gray,
      padding: data.selectedTemplate === "modern" ? "3 8" : "0",
      borderRadius: 3,
    },
  });

  const { personalInfo, experiences, education: edu, skills, summary } = data;

  const CVDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalInfo.fullName || "Your Name"}
          </Text>
          <Text style={styles.jobTitle}>
            {personalInfo.jobTitle || "Professional Title"}
          </Text>
          <View style={styles.contactRow}>
            {personalInfo.email && (
              <Text style={styles.contactItem}>{personalInfo.email}</Text>
            )}
            {personalInfo.phone && (
              <Text style={styles.contactItem}>{personalInfo.phone}</Text>
            )}
            {personalInfo.location && (
              <Text style={styles.contactItem}>
                {personalInfo.location}, UAE
              </Text>
            )}
            {personalInfo.linkedin && (
              <Text style={styles.contactItem}>{personalInfo.linkedin}</Text>
            )}
          </View>
        </View>

        {/* Summary */}
        {summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {data.selectedTemplate === "executive"
                ? "Executive Summary"
                : "Professional Summary"}
            </Text>
            <Text style={styles.summaryText}>{summary}</Text>
          </View>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {data.selectedTemplate === "executive"
                ? "Professional Experience"
                : "Work Experience"}
            </Text>
            {experiences.map((exp) => (
              <View key={exp.id} style={styles.expEntry}>
                <View style={styles.expHeader}>
                  <View>
                    <Text style={styles.expPosition}>
                      {exp.position || "Position"}
                    </Text>
                    <Text style={styles.expCompany}>
                      {exp.company || "Company"}
                    </Text>
                  </View>
                  <Text style={styles.expDate}>
                    {formatDateForPDF(exp.startDate)} –{" "}
                    {exp.current ? "Present" : formatDateForPDF(exp.endDate)}
                  </Text>
                </View>
                {exp.description && (
                  <Text style={styles.expDescription}>{exp.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {edu.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {edu.map((e) => (
              <View key={e.id} style={styles.eduEntry}>
                <View>
                  <Text style={styles.eduDegree}>
                    {e.degree}
                    {e.field && ` in ${e.field}`}
                  </Text>
                  <Text style={styles.eduSchool}>{e.institution}</Text>
                </View>
                <Text style={styles.expDate}>{e.year}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {data.selectedTemplate === "executive"
                ? "Core Competencies"
                : "Skills"}
            </Text>
            <View style={styles.skillsRow}>
              {skills.map((skill) => (
                <Text key={skill} style={styles.skillTag}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );

  const blob = await pdf(CVDocument).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${personalInfo.fullName || "CV"}-Resume.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
