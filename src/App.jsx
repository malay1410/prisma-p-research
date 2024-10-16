import React, { useState } from "react";
import axios from "axios";

// Sample data for testing purposes generated using ChatGPT
const inputData = [
  {
    "file_name": "file_96.csv",
    "upload_date": "2024-01-12",
    "update_date": "2024-09-18",
    "status": "completed",
    "id": 15234
  },
  {
    "file_name": "file_34.doc",
    "upload_date": "2024-03-02",
    "update_date": "2024-10-03",
    "status": "pending",
    "id": 94758
  },
  {
    "file_name": "file_83.txt",
    "upload_date": "2024-02-17",
    "update_date": "2024-09-20",
    "status": "in_progress",
    "id": 34812
  },
  {
    "file_name": "file_17.xls",
    "upload_date": "2024-04-14",
    "update_date": "2024-06-11",
    "status": "completed",
    "id": 72098
  },
  {
    "file_name": "file_21.ppt",
    "upload_date": "2024-05-05",
    "update_date": "2024-10-01",
    "status": "pending",
    "id": 56379
  },
  {
    "file_name": "file_58.zip",
    "upload_date": "2024-06-23",
    "update_date": "2024-07-28",
    "status": "completed",
    "id": 19274
  },
  {
    "file_name": "file_12.pdf",
    "upload_date": "2024-02-28",
    "update_date": "2024-09-25",
    "status": "in_progress",
    "id": 82139
  },
  {
    "file_name": "file_43.xml",
    "upload_date": "2024-07-12",
    "update_date": "2024-08-29",
    "status": "completed",
    "id": 64512
  },
  {
    "file_name": "file_09.docx",
    "upload_date": "2024-04-08",
    "update_date": "2024-06-30",
    "status": "pending",
    "id": 47329
  },
  {
    "file_name": "file_81.mp3",
    "upload_date": "2024-03-22",
    "update_date": "2024-08-11",
    "status": "completed",
    "id": 36182
  },
  {
    "file_name": "file_45.jpg",
    "upload_date": "2023-12-18",
    "update_date": "2024-06-22",
    "status": "completed",
    "id": 42910
  },
  {
    "file_name": "file_90.zip",
    "upload_date": "2023-11-10",
    "update_date": "2024-07-15",
    "status": "in_progress",
    "id": 75832
  },
  {
    "file_name": "file_29.mov",
    "upload_date": "2024-08-02",
    "update_date": "2024-08-20",
    "status": "pending",
    "id": 98563
  },
  {
    "file_name": "file_71.mp4",
    "upload_date": "2024-01-31",
    "update_date": "2024-04-05",
    "status": "completed",
    "id": 37184
  },
  {
    "file_name": "file_13.docx",
    "upload_date": "2024-03-08",
    "update_date": "2024-05-28",
    "status": "pending",
    "id": 28591
  },
  {
    "file_name": "file_12.pdf",
    "upload_date": "2024-02-28",
    "update_date": "2024-09-25",
    "status": "in_progress",
    "id": 82139
  },
  {
    "file_name": "file_43.xml",
    "upload_date": "2024-07-12",
    "update_date": "2024-08-29",
    "status": "completed",
    "id": 64512
  },
  {
    "file_name": "file_09.docx",
    "upload_date": "2024-04-08",
    "update_date": "2024-06-30",
    "status": "pending",
    "id": 47329
  },
  {
    "file_name": "file_81.mp3",
    "upload_date": "2024-03-22",
    "update_date": "2024-08-11",
    "status": "completed",
    "id": 36182
  },
  {
    "file_name": "file_45.jpg",
    "upload_date": "2023-12-18",
    "update_date": "2024-06-22",
    "status": "completed",
    "id": 42910
  },
  {
    "file_name": "file_90.zip",
    "upload_date": "2023-11-10",
    "update_date": "2024-07-15",
    "status": "in_progress",
    "id": 75832
  },
  {
    "file_name": "file_29.mov",
    "upload_date": "2024-08-02",
    "update_date": "2024-08-20",
    "status": "pending",
    "id": 98563
  },
  {
    "file_name": "file_71.mp4",
    "upload_date": "2024-01-31",
    "update_date": "2024-04-05",
    "status": "completed",
    "id": 37184
  },
  {
    "file_name": "file_13.docx",
    "upload_date": "2024-03-08",
    "update_date": "2024-05-28",
    "status": "pending",
    "id": 28591
  },
  {
    "file_name": "file_12.pdf",
    "upload_date": "2024-02-28",
    "update_date": "2024-09-25",
    "status": "in_progress",
    "id": 82139
  },
  {
    "file_name": "file_43.xml",
    "upload_date": "2024-07-12",
    "update_date": "2024-08-29",
    "status": "completed",
    "id": 64512
  },
  {
    "file_name": "file_09.docx",
    "upload_date": "2024-04-08",
    "update_date": "2024-06-30",
    "status": "pending",
    "id": 47329
  },
  {
    "file_name": "file_81.mp3",
    "upload_date": "2024-03-22",
    "update_date": "2024-08-11",
    "status": "completed",
    "id": 36182
  },
  {
    "file_name": "file_45.jpg",
    "upload_date": "2023-12-18",
    "update_date": "2024-06-22",
    "status": "completed",
    "id": 42910
  },
  {
    "file_name": "file_90.zip",
    "upload_date": "2023-11-10",
    "update_date": "2024-07-15",
    "status": "in_progress",
    "id": 75832
  },
  {
    "file_name": "file_29.mov",
    "upload_date": "2024-08-02",
    "update_date": "2024-08-20",
    "status": "pending",
    "id": 98563
  },
  {
    "file_name": "file_71.mp4",
    "upload_date": "2024-01-31",
    "update_date": "2024-04-05",
    "status": "completed",
    "id": 37184
  },
  {
    "file_name": "file_13.docx",
    "upload_date": "2024-03-08",
    "update_date": "2024-05-28",
    "status": "pending",
    "id": 28591
  },
  {
    "file_name": "file_12.pdf",
    "upload_date": "2024-02-28",
    "update_date": "2024-09-25",
    "status": "in_progress",
    "id": 82139
  },
  {
    "file_name": "file_43.xml",
    "upload_date": "2024-07-12",
    "update_date": "2024-08-29",
    "status": "completed",
    "id": 64512
  },
  {
    "file_name": "file_09.docx",
    "upload_date": "2024-04-08",
    "update_date": "2024-06-30",
    "status": "pending",
    "id": 47329
  },
  {
    "file_name": "file_81.mp3",
    "upload_date": "2024-03-22",
    "update_date": "2024-08-11",
    "status": "completed",
    "id": 36182
  },
  {
    "file_name": "file_45.jpg",
    "upload_date": "2023-12-18",
    "update_date": "2024-06-22",
    "status": "completed",
    "id": 42910
  },
  {
    "file_name": "file_90.zip",
    "upload_date": "2023-11-10",
    "update_date": "2024-07-15",
    "status": "in_progress",
    "id": 75832
  },
  {
    "file_name": "file_29.mov",
    "upload_date": "2024-08-02",
    "update_date": "2024-08-20",
    "status": "pending",
    "id": 98563
  },
  {
    "file_name": "file_71.mp4",
    "upload_date": "2024-01-31",
    "update_date": "2024-04-05",
    "status": "completed",
    "id": 37184
  },
  {
    "file_name": "file_13.docx",
    "upload_date": "2024-03-08",
    "update_date": "2024-05-28",
    "status": "pending",
    "id": 28591
  },
  {
    "file_name": "file_12.pdf",
    "upload_date": "2024-02-28",
    "update_date": "2024-09-25",
    "status": "in_progress",
    "id": 82139
  },
  {
    "file_name": "file_43.xml",
    "upload_date": "2024-07-12",
    "update_date": "2024-08-29",
    "status": "completed",
    "id": 64512
  },
  {
    "file_name": "file_09.docx",
    "upload_date": "2024-04-08",
    "update_date": "2024-06-30",
    "status": "pending",
    "id": 47329
  },
  {
    "file_name": "file_81.mp3",
    "upload_date": "2024-03-22",
    "update_date": "2024-08-11",
    "status": "completed",
    "id": 36182
  },
  {
    "file_name": "file_45.jpg",
    "upload_date": "2023-12-18",
    "update_date": "2024-06-22",
    "status": "completed",
    "id": 42910
  },
  {
    "file_name": "file_90.zip",
    "upload_date": "2023-11-10",
    "update_date": "2024-07-15",
    "status": "in_progress",
    "id": 75832
  },
  {
    "file_name": "file_29.mov",
    "upload_date": "2024-08-02",
    "update_date": "2024-08-20",
    "status": "pending",
    "id": 98563
  },
  {
    "file_name": "file_71.mp4",
    "upload_date": "2024-01-31",
    "update_date": "2024-04-05",
    "status": "completed",
    "id": 37184
  },
  {
    "file_name": "file_13.docx",
    "upload_date": "2024-03-08",
    "update_date": "2024-05-28",
    "status": "pending",
    "id": 28591
  },
  {
    "file_name": "file_12.pdf",
    "upload_date": "2024-02-28",
    "update_date": "2024-09-25",
    "status": "in_progress",
    "id": 82139
  },
  {
    "file_name": "file_43.xml",
    "upload_date": "2024-07-12",
    "update_date": "2024-08-29",
    "status": "completed",
    "id": 64512
  },
  {
    "file_name": "file_09.docx",
    "upload_date": "2024-04-08",
    "update_date": "2024-06-30",
    "status": "pending",
    "id": 47329
  },
  {
    "file_name": "file_81.mp3",
    "upload_date": "2024-03-22",
    "update_date": "2024-08-11",
    "status": "completed",
    "id": 36182
  },
  {
    "file_name": "file_45.jpg",
    "upload_date": "2023-12-18",
    "update_date": "2024-06-22",
    "status": "completed",
    "id": 42910
  },
  {
    "file_name": "file_90.zip",
    "upload_date": "2023-11-10",
    "update_date": "2024-07-15",
    "status": "in_progress",
    "id": 75832
  },
  {
    "file_name": "file_29.mov",
    "upload_date": "2024-08-02",
    "update_date": "2024-08-20",
    "status": "pending",
    "id": 98563
  },
  {
    "file_name": "file_71.mp4",
    "upload_date": "2024-01-31",
    "update_date": "2024-04-05",
    "status": "completed",
    "id": 37184
  },
  {
    "file_name": "file_13.docx",
    "upload_date": "2024-03-08",
    "update_date": "2024-05-28",
    "status": "pending",
    "id": 28591
  },
  {
    "file_name": "file_27.xml",
    "upload_date": "2024-06-07",
    "update_date": "2024-07-19",
    "status": "in_progress",
    "id": 40298
  },
  {
    "file_name": "file_40.pdf",
    "upload_date": "2024-01-15",
    "update_date": "2024-09-05",
    "status": "completed",
    "id": 74381
  },
  {
    "file_name": "file_03.docx",
    "upload_date": "2024-05-13",
    "update_date": "2024-10-02",
    "status": "pending",
    "id": 18923
  },
  {
    "file_name": "file_75.xls",
    "upload_date": "2024-02-27",
    "update_date": "2024-09-09",
    "status": "completed",
    "id": 56192
  },
  {
    "file_name": "file_64.ppt",
    "upload_date": "2024-06-19",
    "update_date": "2024-08-04",
    "status": "pending",
    "id": 41023
  },
  {
    "file_name": "file_04.doc",
    "upload_date": "2024-03-30",
    "update_date": "2024-09-13",
    "status": "completed",
    "id": 91284
  },
  {
    "file_name": "file_59.mov",
    "upload_date": "2024-07-06",
    "update_date": "2024-08-16",
    "status": "in_progress",
    "id": 50837
  },
  {
    "file_name": "file_02.xls",
    "upload_date": "2024-02-09",
    "update_date": "2024-05-01",
    "status": "completed",
    "id": 67420
  },
  {
    "file_name": "file_56.ppt",
    "upload_date": "2024-08-19",
    "update_date": "2024-09-23",
    "status": "pending",
    "id": 32495
  },
  {
    "file_name": "file_08.docx",
    "upload_date": "2024-01-20",
    "update_date": "2024-04-18",
    "status": "completed",
    "id": 81230
  },
  {
    "file_name": "file_32.pdf",
    "upload_date": "2024-06-02",
    "update_date": "2024-07-10",
    "status": "in_progress",
    "id": 70392
  },
  {
    "file_name": "file_97.csv",
    "upload_date": "2024-04-21",
    "update_date": "2024-08-14",
    "status": "pending",
    "id": 92631
  },
  {
    "file_name": "file_26.txt",
    "upload_date": "2024-05-23",
    "update_date": "2024-07-11",
    "status": "completed",
    "id": 53984
  },
  {
    "file_name": "file_72.doc",
    "upload_date": "2024-07-04",
    "update_date": "2024-09-17",
    "status": "pending",
    "id": 67851
  },
  {
    "file_name": "file_30.jpg",
    "upload_date": "2024-01-08",
    "update_date": "2024-03-27",
    "status": "in_progress",
    "id": 91542
  },
  {
    "file_name": "file_23.docx",
    "upload_date": "2024-09-01",
    "update_date": "2024-09-28",
    "status": "completed",
    "id": 78421
  },
  {
    "file_name": "file_99.ppt",
    "upload_date": "2024-02-25",
    "update_date": "2024-04-20",
    "status": "pending",
    "id": 37682
  },
  {
    "file_name": "file_50.mov",
    "upload_date": "2024-05-17",
    "update_date": "2024-08-30",
    "status": "completed",
    "id": 82479
  },
  {
    "file_name": "file_57.xml",
    "upload_date": "2024-06-27",
    "update_date": "2024-09-12",
    "status": "in_progress",
    "id": 10382
  },
  {
    "file_name": "file_22.xls",
    "upload_date": "2024-03-13",
    "update_date": "2024-05-25",
    "status": "pending",
    "id": 45871
  },
  {
    "file_name": "file_06.doc",
    "upload_date": "2024-07-16",
    "update_date": "2024-09-21",
    "status": "completed",
    "id": 94613
  },
  {
    "file_name": "file_66.pdf",
    "upload_date": "2024-01-04",
    "update_date": "2024-06-14",
    "status": "in_progress",
    "id": 54329
  },
  {
    "file_name": "file_42.zip",
    "upload_date": "2024-05-08",
    "update_date": "2024-08-05",
    "status": "pending",
    "id": 62013
  },
  {
    "file_name": "file_48.xls",
    "upload_date": "2024-06-11",
    "update_date": "2024-09-27",
    "status": "completed",
    "id": 76249
  },
  {
    "file_name": "file_35.mp3",
    "upload_date": "2024-03-19",
    "update_date": "2024-06-26",
    "status": "pending",
    "id": 93752
  },
  {
    "file_name": "file_77.zip",
    "upload_date": "2024-04-11",
    "update_date": "2024-05-31",
    "status": "completed",
    "id": 19405
  },
  {
    "file_name": "file_11.txt",
    "upload_date": "2024-07-25",
    "update_date": "2024-09-26",
    "status": "in_progress",
    "id": 83476
  },
  {
    "file_name": "file_46.csv",
    "upload_date": "2024-05-12",
    "update_date": "2024-08-12",
    "status": "completed",
    "id": 11058
  },
  {
    "file_name": "file_18.ppt",
    "upload_date": "2024-01-29",
    "update_date": "2024-04-09",
    "status": "pending",
    "id": 36408
  },
  {
    "file_name": "file_16.xls",
    "upload_date": "2024-03-06",
    "update_date": "2024-06-09",
    "status": "completed",
    "id": 72851
  },
  {
    "file_name": "file_54.zip",
    "upload_date": "2024-06-24",
    "update_date": "2024-09-02",
    "status": "in_progress",
    "id": 29137
  },
  {
    "file_name": "file_93.pdf",
    "upload_date": "2024-02-04",
    "update_date": "2024-06-06",
    "status": "completed",
    "id": 17650
  },
  {
    "file_name": "file_24.docx",
    "upload_date": "2024-08-27",
    "update_date": "2024-09-30",
    "status": "pending",
    "id": 63289
  },
  {
    "file_name": "file_19.mov",
    "upload_date": "2024-04-01",
    "update_date": "2024-06-20",
    "status": "completed",
    "id": 49357
  },
  {
    "file_name": "file_74.xls",
    "upload_date": "2024-07-07",
    "update_date": "2024-08-18",
    "status": "pending",
    "id": 84126
  },
  {
    "file_name": "file_25.mp3",
    "upload_date": "2024-05-09",
    "update_date": "2024-09-08",
    "status": "completed",
    "id": 50491
  },
  {
    "file_name": "file_70.zip",
    "upload_date": "2024-06-18",
    "update_date": "2024-08-08",
    "status": "in_progress",
    "id": 91340
  },
  {
    "file_name": "file_33.docx",
    "upload_date": "2024-07-21",
    "update_date": "2024-09-03",
    "status": "pending",
    "id": 13267
  },
  {
    "file_name": "file_89.mov",
    "upload_date": "2024-02-01",
    "update_date": "2024-04-27",
    "status": "completed",
    "id": 56183
  },
  {
    "file_name": "file_78.csv",
    "upload_date": "2024-01-09",
    "update_date": "2024-06-17",
    "status": "in_progress",
    "id": 28904
  },
  {
    "file_name": "file_94.ppt",
    "upload_date": "2024-07-02",
    "update_date": "2024-08-07",
    "status": "pending",
    "id": 37284
  },
  {
    "file_name": "file_10.txt",
    "upload_date": "2024-05-26",
    "update_date": "2024-06-28",
    "status": "completed",
    "id": 64930
  },
  {
    "file_name": "file_31.jpg",
    "upload_date": "2024-04-19",
    "update_date": "2024-07-08",
    "status": "completed",
    "id": 28673
  },
  {
    "file_name": "file_28.xml",
    "upload_date": "2024-08-28",
    "update_date": "2024-09-11",
    "status": "in_progress",
    "id": 57361
  },
  {
    "file_name": "file_61.mov",
    "upload_date": "2024-03-04",
    "update_date": "2024-06-12",
    "status": "completed",
    "id": 97183
  },
  {
    "file_name": "file_79.csv",
    "upload_date": "2024-01-06",
    "update_date": "2024-02-24",
    "status": "pending",
    "id": 15047
  },
  {
    "file_name": "file_91.docx",
    "upload_date": "2024-06-15",
    "update_date": "2024-08-13",
    "status": "completed",
    "id": 80692
  },
  {
    "file_name": "file_53.pdf",
    "upload_date": "2024-05-31",
    "update_date": "2024-09-07",
    "status": "in_progress",
    "id": 38194
  },
  {
    "file_name": "file_14.xls",
    "upload_date": "2024-08-14",
    "update_date": "2024-08-31",
    "status": "pending",
    "id": 29587
  },
  {
    "file_name": "file_68.ppt",
    "upload_date": "2024-04-24",
    "update_date": "2024-07-22",
    "status": "in_progress",
    "id": 45108
  },
  {
    "file_name": "file_47.zip",
    "upload_date": "2024-02-21",
    "update_date": "2024-04-14",
    "status": "completed",
    "id": 16402
  },
  {
    "file_name": "file_62.doc",
    "upload_date": "2024-09-19",
    "update_date": "2024-09-24",
    "status": "completed",
    "id": 20735
  },
  {
    "file_name": "file_52.mp3",
    "upload_date": "2024-05-04",
    "update_date": "2024-08-25",
    "status": "pending",
    "id": 35983
  },
  {
    "file_name": "file_37.txt",
    "upload_date": "2024-03-14",
    "update_date": "2024-05-16",
    "status": "in_progress",
    "id": 61324
  },
  {
    "file_name": "file_38.pdf",
    "upload_date": "2024-07-13",
    "update_date": "2024-08-15",
    "status": "completed",
    "id": 38201
  },
  {
    "file_name": "file_01.xls",
    "upload_date": "2024-06-29",
    "update_date": "2024-09-14",
    "status": "in_progress",
    "id": 52397
  },
  {
    "file_name": "file_41.mov",
    "upload_date": "2024-04-02",
    "update_date": "2024-06-19",
    "status": "pending",
    "id": 31904
  },
  {
    "file_name": "file_76.jpg",
    "upload_date": "2024-05-16",
    "update_date": "2024-09-19",
    "status": "in_progress",
    "id": 47826
  },
  {
    "file_name": "file_29.ppt",
    "upload_date": "2024-02-15",
    "update_date": "2024-05-27",
    "status": "completed",
    "id": 19864
  },
  {
    "file_name": "file_02.xml",
    "upload_date": "2024-07-31",
    "update_date": "2024-08-29",
    "status": "in_progress",
    "id": 24938
  },
  {
    "file_name": "file_66.csv",
    "upload_date": "2024-01-18",
    "update_date": "2024-05-10",
    "status": "completed",
    "id": 34056
  },
  {
    "file_name": "file_50.mov",
    "upload_date": "2024-03-11",
    "update_date": "2024-08-03",
    "status": "in_progress",
    "id": 57984
  },
  {
    "file_name": "file_83.pdf",
    "upload_date": "2024-06-17",
    "update_date": "2024-09-16",
    "status": "completed",
    "id": 14592
  },
  {
    "file_name": "file_15.xls",
    "upload_date": "2024-04-20",
    "update_date": "2024-07-27",
    "status": "pending",
    "id": 95714
  },
  {
    "file_name": "file_06.txt",
    "upload_date": "2024-05-27",
    "update_date": "2024-09-20",
    "status": "in_progress",
    "id": 30281
  },
  {
    "file_name": "file_26.xml",
    "upload_date": "2024-03-08",
    "update_date": "2024-06-29",
    "status": "completed",
    "id": 40968
  },
  {
    "file_name": "file_56.doc",
    "upload_date": "2024-07-26",
    "update_date": "2024-09-11",
    "status": "completed",
    "id": 69385
  },
  {
    "file_name": "file_59.mov",
    "upload_date": "2024-01-22",
    "update_date": "2024-04-01",
    "status": "pending",
    "id": 68147
  },
  {
    "file_name": "file_49.zip",
    "upload_date": "2024-07-05",
    "update_date": "2024-07-30",
    "status": "in_progress",
    "id": 52109
  },
  {
    "file_name": "file_39.mov",
    "upload_date": "2024-05-14",
    "update_date": "2024-07-09",
    "status": "completed",
    "id": 58371
  },
  {
    "file_name": "file_05.xls",
    "upload_date": "2024-01-15",
    "update_date": "2024-06-13",
    "status": "completed",
    "id": 60942
  },
  {
    "file_name": "file_67.txt",
    "upload_date": "2024-08-01",
    "update_date": "2024-09-11",
    "status": "pending",
    "id": 79250
  },
  {
    "file_name": "file_57.jpg",
    "upload_date": "2024-05-02",
    "update_date": "2024-08-22",
    "status": "completed",
    "id": 81946
  },
  {
    "file_name": "file_80.zip",
    "upload_date": "2024-03-29",
    "update_date": "2024-06-17",
    "status": "completed",
    "id": 63471
  }
];

const TableComponent = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });
  const [filterText, setFilterText] = useState("");
  const [filterStatus, setFilterStatus] = useState("");


  //Sort Funciton
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  //Filtering Data
  const filteredData = sortedData.filter(
    (item) =>
      item.file_name.toLowerCase().includes(filterText.toLowerCase()) &&
      item.status.toLowerCase().includes(filterStatus.toLowerCase())
  );

  // On Click Download Alert
  const handleDownloadAlert = (id) => {
    alert(`Downloading file with ID: ${id}`);
  };

  const handleDownload = async (id) => {
    try {
      const response = await axios({
        url: `http://localhost:5001/download/${id}`,  // Backend download endpoint
        method: 'GET',
        responseType: 'blob',
      });

      const contentDisposition = response.headers['content-disposition'];
      let fileName = `${id}.zip`;
      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(/filename="?(.+)"?/i);
        if (fileNameMatch.length === 2)
          fileName = fileNameMatch[1];
      }

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error", error);
      if (error.response) {
        alert(`Error: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        alert("Error: No response received from server. Please try again later.");
      } else {
        alert(`Error: ${error.message}`);
      }
    }
  };
  return (
   <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl overflow-x-auto mb-4">
        <h2 className="font-bold text-center text-xl mb-4">File List</h2>
        <div className="mb-4 flex justify-between">
          <input
            type="text"
            placeholder="Filter by file name"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="border border-gray-400 px-4 py-2 rounded w-1/2"
          />
          <input
            type="text"
            placeholder="Filter by status"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-400 px-4 py-2 rounded w-1/2 ml-4"
          />
        </div>

        <table className="table-auto border border-gray-500 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th
                className="border border-gray-500 px-10 py-2 cursor-pointer"
                onClick={() => handleSort("file_name")}
              >
                File Name {sortConfig.key === "file_name" && (sortConfig.direction === "ascending" ? "▲" : "▼")}
              </th>
              <th
                className="border border-gray-500 px-6 py-2 cursor-pointer"
                onClick={() => handleSort("upload_date")}
              >
                Upload Date {sortConfig.key === "upload_date" && (sortConfig.direction === "ascending" ? "▲" : "▼")}
              </th>
              <th
                className="border border-gray-500 px-6 py-2 cursor-pointer"
                onClick={() => handleSort("update_date")}
              >
                Update Date {sortConfig.key === "update_date" && (sortConfig.direction === "ascending" ? "▲" : "▼")}
              </th>
              <th
                className="border border-gray-500 px-6 py-2 cursor-pointer"
                onClick={() => handleSort("status")}
              >
                Status {sortConfig.key === "status" && (sortConfig.direction === "ascending" ? "▲" : "▼")}
              </th>
              <th className="border border-gray-500 px-6 py-2">Download</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-200 transition-colors duration-200">
                <td className="border border-gray-500 px-6 py-2">{item.file_name}</td>
                <td className="border border-gray-500 px-6 py-2">{item.upload_date}</td>
                <td className="border border-gray-500 px-6 py-2">{item.update_date}</td>
                <td className="border border-gray-500 px-6 py-2">{item.status}</td>
                <td className="border border-gray-500 px-6 py-2 text-center">
                  {item.status === "completed" ? (
                    <button
                      onClick={() => handleDownload(item.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Download
                    </button>
                  ) : (
                    <span className="text-gray-400"></span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div>
      <TableComponent data={inputData} />
    </div>
  );
};

export default App;