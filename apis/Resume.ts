import ResumeFile from '~/assets/Krishna Resume.pdf';
export const downloadResumeFile=()=>{

      // Create a link element
      const link = document.createElement('a');
      link.href = ResumeFile;
      link.download = 'Krishna_Bansal_Resume.pdf'; // Name of the downloaded file
      
      // Append the link to the body
      document.body.appendChild(link);
      
      // Programmatically click the link
      link.click();
      
      // Remove the link from the document
      document.body.removeChild(link);
}