import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const MyScript = () => {
  useEffect(() => {
    const openNav = () => {
      document.getElementById("mySidepanel").style.width = "300px";
    }

    const closeNav = () => {
      document.getElementById("mySidepanel").style.width = "0";
    }

    const cert = document.getElementById("pie");
    const myPieChart = new Chart(cert, {
      type: 'pie',
      data: {
        labels: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11", "S12", "S13", "S14", "S15", "S16", "S17"],
        datasets: [{
          data: [1,0,2,10,3,0,0,0,5,0,0,0,0,0,0,0,0],
          backgroundColor: ["rgba(153, 50, 204, 0.7)","rgba(255, 165, 0, 0.9)","rgba(255, 215, 0, 0.5)","rgba(0, 128, 128, 0.8)","rgba(107, 142, 35, 0.6)","rgba(123, 104, 238, 0.7)","rgba(70, 130, 180, 0.8)","rgba(244, 164, 96, 0.5)","rgba(255, 99, 71, 0.7)","rgba(64, 224, 208, 0.6)","rgba(139, 0, 139, 0.9)","rgba(250, 128, 114, 0.7)","rgba(135, 206, 235, 0.5)","rgba(255, 20, 147, 0.8)","rgba(240, 230, 140, 0.6)","rgba(255, 182, 193, 0.7)","rgba(188, 143, 143, 0.9)"]
        }]
      },
      options: {
        legend: {
          display: false,
        },
        responsive: true,
        title: {
          display: true,
          text: 'OVERALL RECORDS'
        }
      }
    });

    const sem = document.getElementById("bar");
    const myLineChart = new Chart(sem, {
      type: 'line',
      data: {
        labels: ['','1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
        datasets: [{
          data: [0,9.25, 9.7, 8.2, 7.2, 9.0, 0, 0, 0],
          label: "Student curve",
          backgroundColor:'rgba(27, 99, 255, 0.487)',
          fill: true,
        }]
      },
      options: {
        title: {
          display: true,
          text: 'sem wise student performance(in cgpa)'
        },
        responsive: true
      }
    });

    const handleAddClick = () => {
      document.getElementById("box").style.display = "none";
    }
	});
};
export default MyScript;