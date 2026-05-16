// AUTO-GENERATED from scripts/build_dong_js.py · 발표용 데이터 (수정 시 주의)
// 출처: 안양시 주민등록인구통계표 2025.12.31 / 산업세세분류별 총괄 2024 / 2025 안양시 사회조사
//
// ⚠ 각 동 폴리곤(polygon) 좌표는 발표 시연 시각화를 위한 근사치이며,
//   실제 행정경계와는 일치하지 않습니다. 인구·세대·외국인·연령·산업 데이터는 모두 실측치입니다.

export const ANYANG_CENTER = [
  37.3943,
  126.9271
];

export const CITY_TOTAL = {
  "total": 570598,
  "korean": 563279,
  "foreigner": 7319,
  "households": 239981,
  "manangu_total": 239149,
  "donganggu_total": 331449,
  "establishments": 66906,
  "workers": 284815
};

export const cityAgeBrackets = [
  {
    "label": "0~4세",
    "total": 16800,
    "male": 8593,
    "female": 8207
  },
  {
    "label": "5~9세",
    "total": 18364,
    "male": 9312,
    "female": 9052
  },
  {
    "label": "10~14세",
    "total": 24075,
    "male": 12282,
    "female": 11793
  },
  {
    "label": "15~19세",
    "total": 25103,
    "male": 12938,
    "female": 12165
  },
  {
    "label": "20~24세",
    "total": 26777,
    "male": 13686,
    "female": 13091
  },
  {
    "label": "25~29세",
    "total": 37330,
    "male": 19299,
    "female": 18031
  },
  {
    "label": "30~34세",
    "total": 45284,
    "male": 23373,
    "female": 21911
  },
  {
    "label": "35~39세",
    "total": 41408,
    "male": 21363,
    "female": 20045
  },
  {
    "label": "40~44세",
    "total": 42082,
    "male": 21663,
    "female": 20419
  },
  {
    "label": "45~49세",
    "total": 41073,
    "male": 20202,
    "female": 20871
  },
  {
    "label": "50~54세",
    "total": 46590,
    "male": 22713,
    "female": 23877
  },
  {
    "label": "55~59세",
    "total": 47784,
    "male": 22932,
    "female": 24852
  },
  {
    "label": "60~64세",
    "total": 45559,
    "male": 21839,
    "female": 23720
  },
  {
    "label": "65~69세",
    "total": 41191,
    "male": 19770,
    "female": 21421
  },
  {
    "label": "70~74세",
    "total": 25860,
    "male": 12516,
    "female": 13344
  },
  {
    "label": "75~79세",
    "total": 16880,
    "male": 7775,
    "female": 9105
  },
  {
    "label": "80~84세",
    "total": 11199,
    "male": 4492,
    "female": 6707
  },
  {
    "label": "85~89세",
    "total": 6591,
    "male": 2166,
    "female": 4425
  },
  {
    "label": "90~94세",
    "total": 2658,
    "male": 658,
    "female": 2000
  },
  {
    "label": "95~99세",
    "total": 600,
    "male": 116,
    "female": 484
  }
];

export const cityIndustrySections = [
  {
    "section": "B",
    "name": "B.광 업(05~08)",
    "establishments": 3,
    "workers": 39
  },
  {
    "section": "C",
    "name": "C.제 조 업(10~34)",
    "establishments": 4484,
    "workers": 34241
  },
  {
    "section": "D",
    "name": "D.전기, 가스, 증기 및 공기 조절 공급업(35)",
    "establishments": 62,
    "workers": 351
  },
  {
    "section": "E",
    "name": "E.수도, 하수 및 폐기물 처리, 원료 재생업(36~39)",
    "establishments": 70,
    "workers": 1184
  },
  {
    "section": "F",
    "name": "F.건 설 업(41~42)",
    "establishments": 3638,
    "workers": 22149
  },
  {
    "section": "G",
    "name": "G.도매 및 소매업(45~47)",
    "establishments": 19471,
    "workers": 43354
  },
  {
    "section": "H",
    "name": "H.운수 및 창고업(49~52)",
    "establishments": 7432,
    "workers": 14464
  },
  {
    "section": "I",
    "name": "I.숙박 및 음식점업(55~56)",
    "establishments": 7391,
    "workers": 21819
  },
  {
    "section": "J",
    "name": "J.정보통신업(58~63)",
    "establishments": 2471,
    "workers": 12699
  },
  {
    "section": "K",
    "name": "K.금융 및 보험업(64~66)",
    "establishments": 692,
    "workers": 7854
  },
  {
    "section": "L",
    "name": "L.부동산업(68)",
    "establishments": 3256,
    "workers": 8343
  },
  {
    "section": "M",
    "name": "M.전문, 과학 및 기술 서비스업(70~73)",
    "establishments": 4265,
    "workers": 31920
  },
  {
    "section": "N",
    "name": "N.사업시설 관리, 사업 지원 및 임대 서비스업(74~76)",
    "establishments": 1464,
    "workers": 21458
  },
  {
    "section": "O",
    "name": "O.공공 행정, 국방 및 사회보장 행정(84)",
    "establishments": 76,
    "workers": 5661
  },
  {
    "section": "P",
    "name": "P.교육 서비스업(85)",
    "establishments": 3381,
    "workers": 20147
  },
  {
    "section": "Q",
    "name": "Q.보건업 및 사회복지 서비스업(86~87)",
    "establishments": 1809,
    "workers": 24635
  },
  {
    "section": "R",
    "name": "R.예술, 스포츠 및 여가관련 서비스업(90~91)",
    "establishments": 1635,
    "workers": 4403
  },
  {
    "section": "S",
    "name": "S.협회 및 단체, 수리 및 기타 개인 서비스업(94~96)",
    "establishments": 5304,
    "workers": 10091
  }
];

export const cityIndustryTopMid = [
  {
    "section": "G",
    "mid": "47",
    "name": "47.소매업; 자동차 제외",
    "establishments": 12924,
    "workers": 22849
  },
  {
    "section": "I",
    "mid": "56",
    "name": "56.음식점 및 주점업",
    "establishments": 7173,
    "workers": 21234
  },
  {
    "section": "P",
    "mid": "85",
    "name": "85.교육 서비스업",
    "establishments": 3381,
    "workers": 20147
  },
  {
    "section": "G",
    "mid": "46",
    "name": "46.도매 및 상품 중개업",
    "establishments": 6224,
    "workers": 19067
  },
  {
    "section": "F",
    "mid": "42",
    "name": "42.전문직별 공사업",
    "establishments": 3283,
    "workers": 17469
  },
  {
    "section": "M",
    "mid": "72",
    "name": "72.건축 기술, 엔지니어링 및 기타 과학기술 서비스업",
    "establishments": 1519,
    "workers": 16599
  },
  {
    "section": "N",
    "mid": "75",
    "name": "75.사업 지원 서비스업",
    "establishments": 681,
    "workers": 14322
  },
  {
    "section": "Q",
    "mid": "87",
    "name": "87.사회복지 서비스업",
    "establishments": 845,
    "workers": 13222
  },
  {
    "section": "H",
    "mid": "49",
    "name": "49.육상 운송 및 파이프라인 운송업",
    "establishments": 7098,
    "workers": 12814
  },
  {
    "section": "Q",
    "mid": "86",
    "name": "86.보건업",
    "establishments": 964,
    "workers": 11413
  },
  {
    "section": "M",
    "mid": "71",
    "name": "71.전문 서비스업",
    "establishments": 1690,
    "workers": 9655
  },
  {
    "section": "L",
    "mid": "68",
    "name": "68.부동산업",
    "establishments": 3256,
    "workers": 8343
  }
];

export const foreignerAge = [
  {
    "label": "0~4세",
    "total": 124,
    "male": 65,
    "female": 59
  },
  {
    "label": "5~9세",
    "total": 204,
    "male": 105,
    "female": 99
  },
  {
    "label": "10~14세",
    "total": 107,
    "male": 56,
    "female": 51
  },
  {
    "label": "15~19세",
    "total": 215,
    "male": 96,
    "female": 119
  },
  {
    "label": "20~24세",
    "total": 802,
    "male": 402,
    "female": 400
  },
  {
    "label": "25~29세",
    "total": 821,
    "male": 392,
    "female": 429
  },
  {
    "label": "30~34세",
    "total": 813,
    "male": 388,
    "female": 425
  },
  {
    "label": "35~39세",
    "total": 899,
    "male": 444,
    "female": 455
  },
  {
    "label": "40~44세",
    "total": 709,
    "male": 369,
    "female": 340
  },
  {
    "label": "45~49세",
    "total": 533,
    "male": 263,
    "female": 270
  },
  {
    "label": "50~54세",
    "total": 583,
    "male": 276,
    "female": 307
  },
  {
    "label": "55~59세",
    "total": 663,
    "male": 326,
    "female": 337
  },
  {
    "label": "60~64세",
    "total": 457,
    "male": 222,
    "female": 235
  },
  {
    "label": "65~69세",
    "total": 245,
    "male": 128,
    "female": 117
  },
  {
    "label": "70~74세",
    "total": 98,
    "male": 51,
    "female": 47
  },
  {
    "label": "75~79세",
    "total": 32,
    "male": 13,
    "female": 19
  },
  {
    "label": "80세 이상",
    "total": 14,
    "male": 4,
    "female": 10
  }
];

export const dongs = [
  {
    "dong": "박달동",
    "gu": "만안구",
    "center": [
      37.402988,
      126.909449
    ],
    "polygon": [
      [
        37.402621,
        126.913356
      ],
      [
        37.402601,
        126.912856
      ],
      [
        37.401557,
        126.912841
      ],
      [
        37.401555,
        126.911107
      ],
      [
        37.401338,
        126.911181
      ],
      [
        37.401263,
        126.910307
      ],
      [
        37.400181,
        126.910252
      ],
      [
        37.400586,
        126.90927
      ],
      [
        37.401144,
        126.908319
      ],
      [
        37.401617,
        126.908042
      ],
      [
        37.402564,
        126.907938
      ],
      [
        37.40247,
        126.905855
      ],
      [
        37.404207,
        126.90567
      ],
      [
        37.404617,
        126.904565
      ],
      [
        37.404868,
        126.903251
      ],
      [
        37.407612,
        126.907447
      ],
      [
        37.40852,
        126.910855
      ],
      [
        37.404833,
        126.913063
      ],
      [
        37.402621,
        126.913356
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 14088,
      "male": 7082,
      "female": 7006,
      "households": 6682,
      "koreans": 13420,
      "foreigners": 668
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 359,
        "male": 175,
        "female": 184
      },
      {
        "label": "10대",
        "total": 861,
        "male": 430,
        "female": 431
      },
      {
        "label": "20대",
        "total": 1443,
        "male": 719,
        "female": 724
      },
      {
        "label": "30대",
        "total": 1464,
        "male": 831,
        "female": 633
      },
      {
        "label": "40대",
        "total": 1547,
        "male": 824,
        "female": 723
      },
      {
        "label": "50대",
        "total": 2619,
        "male": 1368,
        "female": 1251
      },
      {
        "label": "60대",
        "total": 2756,
        "male": 1367,
        "female": 1389
      },
      {
        "label": "70대",
        "total": 1530,
        "male": 707,
        "female": 823
      },
      {
        "label": "80+",
        "total": 2,
        "male": 0,
        "female": 2
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 139,
        "male": 69,
        "female": 70
      },
      {
        "label": "5~9세",
        "total": 220,
        "male": 106,
        "female": 114
      },
      {
        "label": "10~14세",
        "total": 354,
        "male": 162,
        "female": 192
      },
      {
        "label": "15~19세",
        "total": 507,
        "male": 268,
        "female": 239
      },
      {
        "label": "20~24세",
        "total": 582,
        "male": 280,
        "female": 302
      },
      {
        "label": "25~29세",
        "total": 861,
        "male": 439,
        "female": 422
      },
      {
        "label": "30~34세",
        "total": 827,
        "male": 468,
        "female": 359
      },
      {
        "label": "35~39세",
        "total": 637,
        "male": 363,
        "female": 274
      },
      {
        "label": "40~44세",
        "total": 671,
        "male": 373,
        "female": 298
      },
      {
        "label": "45~49세",
        "total": 876,
        "male": 451,
        "female": 425
      },
      {
        "label": "50~54세",
        "total": 1190,
        "male": 621,
        "female": 569
      },
      {
        "label": "55~59세",
        "total": 1429,
        "male": 747,
        "female": 682
      },
      {
        "label": "60~64세",
        "total": 1427,
        "male": 745,
        "female": 682
      },
      {
        "label": "65~69세",
        "total": 1329,
        "male": 622,
        "female": 707
      },
      {
        "label": "70~74세",
        "total": 859,
        "male": 412,
        "female": 447
      },
      {
        "label": "75~79세",
        "total": 671,
        "male": 295,
        "female": 376
      },
      {
        "label": "80~84세",
        "total": 464,
        "male": 185,
        "female": 279
      },
      {
        "label": "85~89세",
        "total": 259,
        "male": 79,
        "female": 180
      },
      {
        "label": "90~94세",
        "total": 98,
        "male": 26,
        "female": 72
      },
      {
        "label": "95~99세",
        "total": 18,
        "male": 4,
        "female": 14
      },
      {
        "label": "100세 이상",
        "total": 2,
        "male": 0,
        "female": 2
      }
    ],
    "derived": {
      "twenties_total": 1443,
      "twenties_female": 724,
      "twenties_male": 719,
      "twenties_pct": 10.2,
      "female_twenties_pct": 5.1,
      "senior_total": 4288,
      "senior_pct": 30.4,
      "foreigner_pct": 4.74,
      "avg_household_size": 2.11
    }
  },
  {
    "dong": "석수1동",
    "gu": "만안구",
    "center": [
      37.431379,
      126.925013
    ],
    "polygon": [
      [
        37.447821,
        126.931026
      ],
      [
        37.447388,
        126.930325
      ],
      [
        37.44633,
        126.930259
      ],
      [
        37.445293,
        126.930513
      ],
      [
        37.442849,
        126.93537
      ],
      [
        37.440178,
        126.937846
      ],
      [
        37.438451,
        126.93727
      ],
      [
        37.436049,
        126.938639
      ],
      [
        37.435724,
        126.940213
      ],
      [
        37.437414,
        126.941404
      ],
      [
        37.437038,
        126.944919
      ],
      [
        37.438046,
        126.946901
      ],
      [
        37.438523,
        126.948223
      ],
      [
        37.435544,
        126.947877
      ],
      [
        37.431965,
        126.948861
      ],
      [
        37.430964,
        126.948303
      ],
      [
        37.42987,
        126.948925
      ],
      [
        37.427829,
        126.94813
      ],
      [
        37.422306,
        126.948023
      ],
      [
        37.421711,
        126.946309
      ],
      [
        37.420265,
        126.942832
      ],
      [
        37.420825,
        126.941257
      ],
      [
        37.41907,
        126.934689
      ],
      [
        37.417657,
        126.933939
      ],
      [
        37.417898,
        126.931064
      ],
      [
        37.419611,
        126.929087
      ],
      [
        37.418943,
        126.924574
      ],
      [
        37.415813,
        126.924095
      ],
      [
        37.41611,
        126.922988
      ],
      [
        37.416443,
        126.922652
      ],
      [
        37.417152,
        126.922535
      ],
      [
        37.417431,
        126.92235
      ],
      [
        37.41863,
        126.920524
      ],
      [
        37.418434,
        126.919309
      ],
      [
        37.418194,
        126.91876
      ],
      [
        37.416416,
        126.916049
      ],
      [
        37.415804,
        126.915731
      ],
      [
        37.414588,
        126.915648
      ],
      [
        37.414301,
        126.915507
      ],
      [
        37.414087,
        126.915314
      ],
      [
        37.413188,
        126.913609
      ],
      [
        37.420962,
        126.907409
      ],
      [
        37.426416,
        126.904346
      ],
      [
        37.42792,
        126.903733
      ],
      [
        37.431406,
        126.903042
      ],
      [
        37.43637,
        126.901922
      ],
      [
        37.435513,
        126.90279
      ],
      [
        37.434058,
        126.904469
      ],
      [
        37.433593,
        126.907238
      ],
      [
        37.433684,
        126.908204
      ],
      [
        37.433821,
        126.908734
      ],
      [
        37.43416,
        126.909335
      ],
      [
        37.435409,
        126.910381
      ],
      [
        37.4366,
        126.91082
      ],
      [
        37.437544,
        126.911345
      ],
      [
        37.438589,
        126.912357
      ],
      [
        37.440039,
        126.914333
      ],
      [
        37.440096,
        126.914801
      ],
      [
        37.439893,
        126.918055
      ],
      [
        37.440775,
        126.919429
      ],
      [
        37.441339,
        126.919929
      ],
      [
        37.443623,
        126.92096
      ],
      [
        37.444125,
        126.921093
      ],
      [
        37.44517,
        126.922124
      ],
      [
        37.446645,
        126.923731
      ],
      [
        37.447518,
        126.925353
      ],
      [
        37.449689,
        126.92834
      ],
      [
        37.450193,
        126.928749
      ],
      [
        37.447821,
        126.931026
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 18410,
      "male": 8949,
      "female": 9461,
      "households": 7472,
      "koreans": 18291,
      "foreigners": 119
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1007,
        "male": 527,
        "female": 480
      },
      {
        "label": "10대",
        "total": 1241,
        "male": 639,
        "female": 602
      },
      {
        "label": "20대",
        "total": 1940,
        "male": 1011,
        "female": 929
      },
      {
        "label": "30대",
        "total": 2475,
        "male": 1258,
        "female": 1217
      },
      {
        "label": "40대",
        "total": 2336,
        "male": 1143,
        "female": 1193
      },
      {
        "label": "50대",
        "total": 3279,
        "male": 1522,
        "female": 1757
      },
      {
        "label": "60대",
        "total": 3287,
        "male": 1574,
        "female": 1713
      },
      {
        "label": "70대",
        "total": 1854,
        "male": 896,
        "female": 958
      },
      {
        "label": "80+",
        "total": 5,
        "male": 0,
        "female": 5
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 491,
        "male": 247,
        "female": 244
      },
      {
        "label": "5~9세",
        "total": 516,
        "male": 280,
        "female": 236
      },
      {
        "label": "10~14세",
        "total": 607,
        "male": 302,
        "female": 305
      },
      {
        "label": "15~19세",
        "total": 634,
        "male": 337,
        "female": 297
      },
      {
        "label": "20~24세",
        "total": 824,
        "male": 434,
        "female": 390
      },
      {
        "label": "25~29세",
        "total": 1116,
        "male": 577,
        "female": 539
      },
      {
        "label": "30~34세",
        "total": 1271,
        "male": 659,
        "female": 612
      },
      {
        "label": "35~39세",
        "total": 1204,
        "male": 599,
        "female": 605
      },
      {
        "label": "40~44세",
        "total": 1187,
        "male": 595,
        "female": 592
      },
      {
        "label": "45~49세",
        "total": 1149,
        "male": 548,
        "female": 601
      },
      {
        "label": "50~54세",
        "total": 1572,
        "male": 733,
        "female": 839
      },
      {
        "label": "55~59세",
        "total": 1707,
        "male": 789,
        "female": 918
      },
      {
        "label": "60~64세",
        "total": 1642,
        "male": 765,
        "female": 877
      },
      {
        "label": "65~69세",
        "total": 1645,
        "male": 809,
        "female": 836
      },
      {
        "label": "70~74세",
        "total": 1085,
        "male": 519,
        "female": 566
      },
      {
        "label": "75~79세",
        "total": 769,
        "male": 377,
        "female": 392
      },
      {
        "label": "80~84세",
        "total": 457,
        "male": 210,
        "female": 247
      },
      {
        "label": "85~89세",
        "total": 275,
        "male": 89,
        "female": 186
      },
      {
        "label": "90~94세",
        "total": 106,
        "male": 24,
        "female": 82
      },
      {
        "label": "95~99세",
        "total": 29,
        "male": 2,
        "female": 27
      },
      {
        "label": "100세 이상",
        "total": 5,
        "male": 0,
        "female": 5
      }
    ],
    "derived": {
      "twenties_total": 1940,
      "twenties_female": 929,
      "twenties_male": 1011,
      "twenties_pct": 10.5,
      "female_twenties_pct": 5.0,
      "senior_total": 5146,
      "senior_pct": 28.0,
      "foreigner_pct": 0.65,
      "avg_household_size": 2.46
    }
  },
  {
    "dong": "석수2동",
    "gu": "만안구",
    "center": [
      37.421199,
      126.898675
    ],
    "polygon": [
      [
        37.43736,
        126.900491
      ],
      [
        37.43637,
        126.901922
      ],
      [
        37.431406,
        126.903042
      ],
      [
        37.42792,
        126.903733
      ],
      [
        37.426416,
        126.904346
      ],
      [
        37.420962,
        126.907409
      ],
      [
        37.413188,
        126.913609
      ],
      [
        37.410383,
        126.912971
      ],
      [
        37.409029,
        126.912849
      ],
      [
        37.407612,
        126.907447
      ],
      [
        37.408253,
        126.907131
      ],
      [
        37.408319,
        126.902443
      ],
      [
        37.410425,
        126.903528
      ],
      [
        37.410693,
        126.903349
      ],
      [
        37.410922,
        126.902896
      ],
      [
        37.410946,
        126.902347
      ],
      [
        37.411346,
        126.902341
      ],
      [
        37.41155,
        126.902253
      ],
      [
        37.411735,
        126.901361
      ],
      [
        37.411847,
        126.899421
      ],
      [
        37.412138,
        126.896803
      ],
      [
        37.412807,
        126.894511
      ],
      [
        37.413319,
        126.8943
      ],
      [
        37.413733,
        126.894541
      ],
      [
        37.415951,
        126.893691
      ],
      [
        37.416106,
        126.893513
      ],
      [
        37.417566,
        126.892932
      ],
      [
        37.417759,
        126.889605
      ],
      [
        37.417848,
        126.889379
      ],
      [
        37.418179,
        126.889017
      ],
      [
        37.418598,
        126.888875
      ],
      [
        37.418869,
        126.888945
      ],
      [
        37.4204,
        126.890352
      ],
      [
        37.420527,
        126.891889
      ],
      [
        37.421678,
        126.893958
      ],
      [
        37.425624,
        126.896478
      ],
      [
        37.427144,
        126.896834
      ],
      [
        37.427758,
        126.896569
      ],
      [
        37.428152,
        126.896272
      ],
      [
        37.428546,
        126.895337
      ],
      [
        37.428459,
        126.894611
      ],
      [
        37.429032,
        126.89407
      ],
      [
        37.429698,
        126.894571
      ],
      [
        37.430631,
        126.895833
      ],
      [
        37.431021,
        126.897809
      ],
      [
        37.432427,
        126.898617
      ],
      [
        37.433924,
        126.899169
      ],
      [
        37.435051,
        126.899417
      ],
      [
        37.436706,
        126.899499
      ],
      [
        37.437454,
        126.899648
      ],
      [
        37.43736,
        126.900491
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 29129,
      "male": 14510,
      "female": 14619,
      "households": 12392,
      "koreans": 28786,
      "foreigners": 343
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1332,
        "male": 672,
        "female": 660
      },
      {
        "label": "10대",
        "total": 2059,
        "male": 1100,
        "female": 959
      },
      {
        "label": "20대",
        "total": 3339,
        "male": 1743,
        "female": 1596
      },
      {
        "label": "30대",
        "total": 3695,
        "male": 1922,
        "female": 1773
      },
      {
        "label": "40대",
        "total": 3730,
        "male": 1935,
        "female": 1795
      },
      {
        "label": "50대",
        "total": 5251,
        "male": 2592,
        "female": 2659
      },
      {
        "label": "60대",
        "total": 5249,
        "male": 2624,
        "female": 2625
      },
      {
        "label": "70대",
        "total": 2651,
        "male": 1246,
        "female": 1405
      },
      {
        "label": "80+",
        "total": 8,
        "male": 0,
        "female": 8
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 641,
        "male": 339,
        "female": 302
      },
      {
        "label": "5~9세",
        "total": 691,
        "male": 333,
        "female": 358
      },
      {
        "label": "10~14세",
        "total": 967,
        "male": 518,
        "female": 449
      },
      {
        "label": "15~19세",
        "total": 1092,
        "male": 582,
        "female": 510
      },
      {
        "label": "20~24세",
        "total": 1391,
        "male": 706,
        "female": 685
      },
      {
        "label": "25~29세",
        "total": 1948,
        "male": 1037,
        "female": 911
      },
      {
        "label": "30~34세",
        "total": 2035,
        "male": 1062,
        "female": 973
      },
      {
        "label": "35~39세",
        "total": 1660,
        "male": 860,
        "female": 800
      },
      {
        "label": "40~44세",
        "total": 1827,
        "male": 968,
        "female": 859
      },
      {
        "label": "45~49세",
        "total": 1903,
        "male": 967,
        "female": 936
      },
      {
        "label": "50~54세",
        "total": 2401,
        "male": 1191,
        "female": 1210
      },
      {
        "label": "55~59세",
        "total": 2850,
        "male": 1401,
        "female": 1449
      },
      {
        "label": "60~64세",
        "total": 2846,
        "male": 1422,
        "female": 1424
      },
      {
        "label": "65~69세",
        "total": 2403,
        "male": 1202,
        "female": 1201
      },
      {
        "label": "70~74세",
        "total": 1540,
        "male": 731,
        "female": 809
      },
      {
        "label": "75~79세",
        "total": 1111,
        "male": 515,
        "female": 596
      },
      {
        "label": "80~84세",
        "total": 794,
        "male": 321,
        "female": 473
      },
      {
        "label": "85~89세",
        "total": 467,
        "male": 143,
        "female": 324
      },
      {
        "label": "90~94세",
        "total": 171,
        "male": 51,
        "female": 120
      },
      {
        "label": "95~99세",
        "total": 40,
        "male": 8,
        "female": 32
      },
      {
        "label": "100세 이상",
        "total": 8,
        "male": 0,
        "female": 8
      }
    ],
    "derived": {
      "twenties_total": 3339,
      "twenties_female": 1596,
      "twenties_male": 1743,
      "twenties_pct": 11.5,
      "female_twenties_pct": 5.5,
      "senior_total": 7908,
      "senior_pct": 27.1,
      "foreigner_pct": 1.18,
      "avg_household_size": 2.35
    }
  },
  {
    "dong": "안양1동",
    "gu": "만안구",
    "center": [
      37.400656,
      126.924026
    ],
    "polygon": [
      [
        37.400834,
        126.927839
      ],
      [
        37.399429,
        126.929552
      ],
      [
        37.397442,
        126.931463
      ],
      [
        37.394227,
        126.925289
      ],
      [
        37.398288,
        126.921619
      ],
      [
        37.400508,
        126.919875
      ],
      [
        37.401075,
        126.920488
      ],
      [
        37.401307,
        126.920624
      ],
      [
        37.402847,
        126.920653
      ],
      [
        37.403548,
        126.920947
      ],
      [
        37.40454,
        126.922343
      ],
      [
        37.403646,
        126.923812
      ],
      [
        37.400834,
        126.927839
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 18948,
      "male": 9472,
      "female": 9476,
      "households": 7949,
      "koreans": 18504,
      "foreigners": 444
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1292,
        "male": 669,
        "female": 623
      },
      {
        "label": "10대",
        "total": 1200,
        "male": 604,
        "female": 596
      },
      {
        "label": "20대",
        "total": 2273,
        "male": 1144,
        "female": 1129
      },
      {
        "label": "30대",
        "total": 3489,
        "male": 1782,
        "female": 1707
      },
      {
        "label": "40대",
        "total": 2487,
        "male": 1313,
        "female": 1174
      },
      {
        "label": "50대",
        "total": 3075,
        "male": 1483,
        "female": 1592
      },
      {
        "label": "60대",
        "total": 2692,
        "male": 1307,
        "female": 1385
      },
      {
        "label": "70대",
        "total": 1424,
        "male": 689,
        "female": 735
      },
      {
        "label": "80+",
        "total": 2,
        "male": 0,
        "female": 2
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 774,
        "male": 407,
        "female": 367
      },
      {
        "label": "5~9세",
        "total": 518,
        "male": 262,
        "female": 256
      },
      {
        "label": "10~14세",
        "total": 509,
        "male": 261,
        "female": 248
      },
      {
        "label": "15~19세",
        "total": 691,
        "male": 343,
        "female": 348
      },
      {
        "label": "20~24세",
        "total": 974,
        "male": 488,
        "female": 486
      },
      {
        "label": "25~29세",
        "total": 1299,
        "male": 656,
        "female": 643
      },
      {
        "label": "30~34세",
        "total": 1825,
        "male": 929,
        "female": 896
      },
      {
        "label": "35~39세",
        "total": 1664,
        "male": 853,
        "female": 811
      },
      {
        "label": "40~44세",
        "total": 1305,
        "male": 716,
        "female": 589
      },
      {
        "label": "45~49세",
        "total": 1182,
        "male": 597,
        "female": 585
      },
      {
        "label": "50~54세",
        "total": 1484,
        "male": 713,
        "female": 771
      },
      {
        "label": "55~59세",
        "total": 1591,
        "male": 770,
        "female": 821
      },
      {
        "label": "60~64세",
        "total": 1422,
        "male": 710,
        "female": 712
      },
      {
        "label": "65~69세",
        "total": 1270,
        "male": 597,
        "female": 673
      },
      {
        "label": "70~74세",
        "total": 868,
        "male": 421,
        "female": 447
      },
      {
        "label": "75~79세",
        "total": 556,
        "male": 268,
        "female": 288
      },
      {
        "label": "80~84세",
        "total": 324,
        "male": 152,
        "female": 172
      },
      {
        "label": "85~89세",
        "total": 181,
        "male": 63,
        "female": 118
      },
      {
        "label": "90~94세",
        "total": 55,
        "male": 14,
        "female": 41
      },
      {
        "label": "95~99세",
        "total": 10,
        "male": 1,
        "female": 9
      },
      {
        "label": "100세 이상",
        "total": 2,
        "male": 0,
        "female": 2
      }
    ],
    "derived": {
      "twenties_total": 2273,
      "twenties_female": 1129,
      "twenties_male": 1144,
      "twenties_pct": 12.0,
      "female_twenties_pct": 6.0,
      "senior_total": 4118,
      "senior_pct": 21.7,
      "foreigner_pct": 2.34,
      "avg_household_size": 2.38
    }
  },
  {
    "dong": "안양2동",
    "gu": "만안구",
    "center": [
      37.412388,
      126.925283
    ],
    "polygon": [
      [
        37.414186,
        126.937083
      ],
      [
        37.413537,
        126.936548
      ],
      [
        37.413315,
        126.935224
      ],
      [
        37.413794,
        126.933059
      ],
      [
        37.413385,
        126.929404
      ],
      [
        37.408852,
        126.927786
      ],
      [
        37.407343,
        126.927516
      ],
      [
        37.404944,
        126.928237
      ],
      [
        37.400834,
        126.927839
      ],
      [
        37.403646,
        126.923812
      ],
      [
        37.40454,
        126.922343
      ],
      [
        37.403548,
        126.920947
      ],
      [
        37.402847,
        126.920653
      ],
      [
        37.401307,
        126.920624
      ],
      [
        37.401075,
        126.920488
      ],
      [
        37.400508,
        126.919875
      ],
      [
        37.40196,
        126.918657
      ],
      [
        37.402621,
        126.913356
      ],
      [
        37.404833,
        126.913063
      ],
      [
        37.40852,
        126.910855
      ],
      [
        37.409029,
        126.912849
      ],
      [
        37.410383,
        126.912971
      ],
      [
        37.413188,
        126.913609
      ],
      [
        37.414087,
        126.915314
      ],
      [
        37.414301,
        126.915507
      ],
      [
        37.414588,
        126.915648
      ],
      [
        37.415804,
        126.915731
      ],
      [
        37.416416,
        126.916049
      ],
      [
        37.418194,
        126.91876
      ],
      [
        37.418434,
        126.919309
      ],
      [
        37.41863,
        126.920524
      ],
      [
        37.417431,
        126.92235
      ],
      [
        37.417152,
        126.922535
      ],
      [
        37.416443,
        126.922652
      ],
      [
        37.41611,
        126.922988
      ],
      [
        37.415813,
        126.924095
      ],
      [
        37.418943,
        126.924574
      ],
      [
        37.419611,
        126.929087
      ],
      [
        37.417898,
        126.931064
      ],
      [
        37.417657,
        126.933939
      ],
      [
        37.41907,
        126.934689
      ],
      [
        37.420825,
        126.941257
      ],
      [
        37.420265,
        126.942832
      ],
      [
        37.421711,
        126.946309
      ],
      [
        37.421363,
        126.947416
      ],
      [
        37.419085,
        126.94181
      ],
      [
        37.414186,
        126.937083
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 22879,
      "male": 11470,
      "female": 11409,
      "households": 10732,
      "koreans": 22147,
      "foreigners": 732
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1121,
        "male": 577,
        "female": 544
      },
      {
        "label": "10대",
        "total": 1333,
        "male": 657,
        "female": 676
      },
      {
        "label": "20대",
        "total": 2666,
        "male": 1346,
        "female": 1320
      },
      {
        "label": "30대",
        "total": 3595,
        "male": 1940,
        "female": 1655
      },
      {
        "label": "40대",
        "total": 2878,
        "male": 1528,
        "female": 1350
      },
      {
        "label": "50대",
        "total": 3606,
        "male": 1752,
        "female": 1854
      },
      {
        "label": "60대",
        "total": 3865,
        "male": 1913,
        "female": 1952
      },
      {
        "label": "70대",
        "total": 2029,
        "male": 990,
        "female": 1039
      },
      {
        "label": "80+",
        "total": 10,
        "male": 1,
        "female": 9
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 597,
        "male": 311,
        "female": 286
      },
      {
        "label": "5~9세",
        "total": 524,
        "male": 266,
        "female": 258
      },
      {
        "label": "10~14세",
        "total": 632,
        "male": 311,
        "female": 321
      },
      {
        "label": "15~19세",
        "total": 701,
        "male": 346,
        "female": 355
      },
      {
        "label": "20~24세",
        "total": 1056,
        "male": 527,
        "female": 529
      },
      {
        "label": "25~29세",
        "total": 1610,
        "male": 819,
        "female": 791
      },
      {
        "label": "30~34세",
        "total": 1921,
        "male": 1029,
        "female": 892
      },
      {
        "label": "35~39세",
        "total": 1674,
        "male": 911,
        "female": 763
      },
      {
        "label": "40~44세",
        "total": 1513,
        "male": 837,
        "female": 676
      },
      {
        "label": "45~49세",
        "total": 1365,
        "male": 691,
        "female": 674
      },
      {
        "label": "50~54세",
        "total": 1658,
        "male": 842,
        "female": 816
      },
      {
        "label": "55~59세",
        "total": 1948,
        "male": 910,
        "female": 1038
      },
      {
        "label": "60~64세",
        "total": 2009,
        "male": 1007,
        "female": 1002
      },
      {
        "label": "65~69세",
        "total": 1856,
        "male": 906,
        "female": 950
      },
      {
        "label": "70~74세",
        "total": 1227,
        "male": 602,
        "female": 625
      },
      {
        "label": "75~79세",
        "total": 802,
        "male": 388,
        "female": 414
      },
      {
        "label": "80~84세",
        "total": 591,
        "male": 252,
        "female": 339
      },
      {
        "label": "85~89세",
        "total": 308,
        "male": 98,
        "female": 210
      },
      {
        "label": "90~94세",
        "total": 119,
        "male": 40,
        "female": 79
      },
      {
        "label": "95~99세",
        "total": 26,
        "male": 5,
        "female": 21
      },
      {
        "label": "100세 이상",
        "total": 10,
        "male": 1,
        "female": 9
      }
    ],
    "derived": {
      "twenties_total": 2666,
      "twenties_female": 1320,
      "twenties_male": 1346,
      "twenties_pct": 11.7,
      "female_twenties_pct": 5.8,
      "senior_total": 5904,
      "senior_pct": 25.8,
      "foreigner_pct": 3.2,
      "avg_household_size": 2.13
    }
  },
  {
    "dong": "안양3동",
    "gu": "만안구",
    "center": [
      37.397661,
      126.912035
    ],
    "polygon": [
      [
        37.400508,
        126.919875
      ],
      [
        37.398743,
        126.916744
      ],
      [
        37.395896,
        126.914703
      ],
      [
        37.393271,
        126.916499
      ],
      [
        37.391741,
        126.915843
      ],
      [
        37.39232,
        126.914114
      ],
      [
        37.393738,
        126.913439
      ],
      [
        37.394861,
        126.913099
      ],
      [
        37.394977,
        126.912703
      ],
      [
        37.39497,
        126.909898
      ],
      [
        37.394954,
        126.907832
      ],
      [
        37.394814,
        126.906346
      ],
      [
        37.395115,
        126.905749
      ],
      [
        37.397083,
        126.904338
      ],
      [
        37.39784,
        126.905064
      ],
      [
        37.39769,
        126.907915
      ],
      [
        37.397789,
        126.908317
      ],
      [
        37.399466,
        126.91026
      ],
      [
        37.401263,
        126.910307
      ],
      [
        37.401338,
        126.911181
      ],
      [
        37.401555,
        126.911107
      ],
      [
        37.401557,
        126.912841
      ],
      [
        37.402601,
        126.912856
      ],
      [
        37.402621,
        126.913356
      ],
      [
        37.40196,
        126.918657
      ],
      [
        37.400508,
        126.919875
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 15348,
      "male": 7551,
      "female": 7797,
      "households": 7205,
      "koreans": 14790,
      "foreigners": 558
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 432,
        "male": 234,
        "female": 198
      },
      {
        "label": "10대",
        "total": 946,
        "male": 479,
        "female": 467
      },
      {
        "label": "20대",
        "total": 1856,
        "male": 966,
        "female": 890
      },
      {
        "label": "30대",
        "total": 1850,
        "male": 1030,
        "female": 820
      },
      {
        "label": "40대",
        "total": 1832,
        "male": 987,
        "female": 845
      },
      {
        "label": "50대",
        "total": 2552,
        "male": 1213,
        "female": 1339
      },
      {
        "label": "60대",
        "total": 3021,
        "male": 1399,
        "female": 1622
      },
      {
        "label": "70대",
        "total": 1612,
        "male": 738,
        "female": 874
      },
      {
        "label": "80+",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 159,
        "male": 80,
        "female": 79
      },
      {
        "label": "5~9세",
        "total": 273,
        "male": 154,
        "female": 119
      },
      {
        "label": "10~14세",
        "total": 385,
        "male": 199,
        "female": 186
      },
      {
        "label": "15~19세",
        "total": 561,
        "male": 280,
        "female": 281
      },
      {
        "label": "20~24세",
        "total": 804,
        "male": 405,
        "female": 399
      },
      {
        "label": "25~29세",
        "total": 1052,
        "male": 561,
        "female": 491
      },
      {
        "label": "30~34세",
        "total": 1063,
        "male": 606,
        "female": 457
      },
      {
        "label": "35~39세",
        "total": 787,
        "male": 424,
        "female": 363
      },
      {
        "label": "40~44세",
        "total": 876,
        "male": 482,
        "female": 394
      },
      {
        "label": "45~49세",
        "total": 956,
        "male": 505,
        "female": 451
      },
      {
        "label": "50~54세",
        "total": 1178,
        "male": 584,
        "female": 594
      },
      {
        "label": "55~59세",
        "total": 1374,
        "male": 629,
        "female": 745
      },
      {
        "label": "60~64세",
        "total": 1528,
        "male": 706,
        "female": 822
      },
      {
        "label": "65~69세",
        "total": 1493,
        "male": 693,
        "female": 800
      },
      {
        "label": "70~74세",
        "total": 960,
        "male": 457,
        "female": 503
      },
      {
        "label": "75~79세",
        "total": 652,
        "male": 281,
        "female": 371
      },
      {
        "label": "80~84세",
        "total": 384,
        "male": 146,
        "female": 238
      },
      {
        "label": "85~89세",
        "total": 217,
        "male": 69,
        "female": 148
      },
      {
        "label": "90~94세",
        "total": 75,
        "male": 16,
        "female": 59
      },
      {
        "label": "95~99세",
        "total": 13,
        "male": 3,
        "female": 10
      },
      {
        "label": "100세 이상",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "derived": {
      "twenties_total": 1856,
      "twenties_female": 890,
      "twenties_male": 966,
      "twenties_pct": 12.1,
      "female_twenties_pct": 5.8,
      "senior_total": 4633,
      "senior_pct": 30.2,
      "foreigner_pct": 3.64,
      "avg_household_size": 2.13
    }
  },
  {
    "dong": "안양4동",
    "gu": "만안구",
    "center": [
      37.395925,
      126.919018
    ],
    "polygon": [
      [
        37.396454,
        126.923324
      ],
      [
        37.394469,
        126.918852
      ],
      [
        37.394359,
        126.918834
      ],
      [
        37.393622,
        126.918182
      ],
      [
        37.393106,
        126.917244
      ],
      [
        37.393271,
        126.916499
      ],
      [
        37.395896,
        126.914703
      ],
      [
        37.398743,
        126.916744
      ],
      [
        37.400508,
        126.919875
      ],
      [
        37.398288,
        126.921619
      ],
      [
        37.396454,
        126.923324
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 6690,
      "male": 3338,
      "female": 3352,
      "households": 3516,
      "koreans": 6457,
      "foreigners": 233
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 140,
        "male": 74,
        "female": 66
      },
      {
        "label": "10대",
        "total": 378,
        "male": 167,
        "female": 211
      },
      {
        "label": "20대",
        "total": 855,
        "male": 428,
        "female": 427
      },
      {
        "label": "30대",
        "total": 821,
        "male": 455,
        "female": 366
      },
      {
        "label": "40대",
        "total": 780,
        "male": 450,
        "female": 330
      },
      {
        "label": "50대",
        "total": 1075,
        "male": 552,
        "female": 523
      },
      {
        "label": "60대",
        "total": 1203,
        "male": 598,
        "female": 605
      },
      {
        "label": "70대",
        "total": 738,
        "male": 331,
        "female": 407
      },
      {
        "label": "80+",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 69,
        "male": 37,
        "female": 32
      },
      {
        "label": "5~9세",
        "total": 71,
        "male": 37,
        "female": 34
      },
      {
        "label": "10~14세",
        "total": 142,
        "male": 66,
        "female": 76
      },
      {
        "label": "15~19세",
        "total": 236,
        "male": 101,
        "female": 135
      },
      {
        "label": "20~24세",
        "total": 368,
        "male": 167,
        "female": 201
      },
      {
        "label": "25~29세",
        "total": 487,
        "male": 261,
        "female": 226
      },
      {
        "label": "30~34세",
        "total": 482,
        "male": 252,
        "female": 230
      },
      {
        "label": "35~39세",
        "total": 339,
        "male": 203,
        "female": 136
      },
      {
        "label": "40~44세",
        "total": 385,
        "male": 229,
        "female": 156
      },
      {
        "label": "45~49세",
        "total": 395,
        "male": 221,
        "female": 174
      },
      {
        "label": "50~54세",
        "total": 485,
        "male": 257,
        "female": 228
      },
      {
        "label": "55~59세",
        "total": 590,
        "male": 295,
        "female": 295
      },
      {
        "label": "60~64세",
        "total": 618,
        "male": 319,
        "female": 299
      },
      {
        "label": "65~69세",
        "total": 585,
        "male": 279,
        "female": 306
      },
      {
        "label": "70~74세",
        "total": 427,
        "male": 207,
        "female": 220
      },
      {
        "label": "75~79세",
        "total": 311,
        "male": 124,
        "female": 187
      },
      {
        "label": "80~84세",
        "total": 242,
        "male": 86,
        "female": 156
      },
      {
        "label": "85~89세",
        "total": 153,
        "male": 48,
        "female": 105
      },
      {
        "label": "90~94세",
        "total": 56,
        "male": 24,
        "female": 32
      },
      {
        "label": "95~99세",
        "total": 16,
        "male": 9,
        "female": 7
      },
      {
        "label": "100세 이상",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "derived": {
      "twenties_total": 855,
      "twenties_female": 427,
      "twenties_male": 428,
      "twenties_pct": 12.8,
      "female_twenties_pct": 6.4,
      "senior_total": 1941,
      "senior_pct": 29.0,
      "foreigner_pct": 3.48,
      "avg_household_size": 1.9
    }
  },
  {
    "dong": "안양5동",
    "gu": "만안구",
    "center": [
      37.392402,
      126.922079
    ],
    "polygon": [
      [
        37.395735,
        126.928269
      ],
      [
        37.394298,
        126.930142
      ],
      [
        37.392452,
        126.926708
      ],
      [
        37.391571,
        126.927435
      ],
      [
        37.390433,
        126.925314
      ],
      [
        37.389991,
        126.924087
      ],
      [
        37.3883,
        126.920446
      ],
      [
        37.387267,
        126.918811
      ],
      [
        37.387845,
        126.918644
      ],
      [
        37.390754,
        126.91732
      ],
      [
        37.391741,
        126.915843
      ],
      [
        37.393271,
        126.916499
      ],
      [
        37.393106,
        126.917244
      ],
      [
        37.393622,
        126.918182
      ],
      [
        37.394359,
        126.918834
      ],
      [
        37.394469,
        126.918852
      ],
      [
        37.396454,
        126.923324
      ],
      [
        37.394227,
        126.925289
      ],
      [
        37.395735,
        126.928269
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 14970,
      "male": 7402,
      "female": 7568,
      "households": 6717,
      "koreans": 14547,
      "foreigners": 423
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1013,
        "male": 508,
        "female": 505
      },
      {
        "label": "10대",
        "total": 981,
        "male": 523,
        "female": 458
      },
      {
        "label": "20대",
        "total": 1520,
        "male": 770,
        "female": 750
      },
      {
        "label": "30대",
        "total": 2435,
        "male": 1261,
        "female": 1174
      },
      {
        "label": "40대",
        "total": 2043,
        "male": 1075,
        "female": 968
      },
      {
        "label": "50대",
        "total": 2233,
        "male": 1117,
        "female": 1116
      },
      {
        "label": "60대",
        "total": 2283,
        "male": 1093,
        "female": 1190
      },
      {
        "label": "70대",
        "total": 1286,
        "male": 603,
        "female": 683
      },
      {
        "label": "80+",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 589,
        "male": 301,
        "female": 288
      },
      {
        "label": "5~9세",
        "total": 424,
        "male": 207,
        "female": 217
      },
      {
        "label": "10~14세",
        "total": 418,
        "male": 229,
        "female": 189
      },
      {
        "label": "15~19세",
        "total": 563,
        "male": 294,
        "female": 269
      },
      {
        "label": "20~24세",
        "total": 639,
        "male": 322,
        "female": 317
      },
      {
        "label": "25~29세",
        "total": 881,
        "male": 448,
        "female": 433
      },
      {
        "label": "30~34세",
        "total": 1213,
        "male": 610,
        "female": 603
      },
      {
        "label": "35~39세",
        "total": 1222,
        "male": 651,
        "female": 571
      },
      {
        "label": "40~44세",
        "total": 1066,
        "male": 578,
        "female": 488
      },
      {
        "label": "45~49세",
        "total": 977,
        "male": 497,
        "female": 480
      },
      {
        "label": "50~54세",
        "total": 1093,
        "male": 559,
        "female": 534
      },
      {
        "label": "55~59세",
        "total": 1140,
        "male": 558,
        "female": 582
      },
      {
        "label": "60~64세",
        "total": 1184,
        "male": 584,
        "female": 600
      },
      {
        "label": "65~69세",
        "total": 1099,
        "male": 509,
        "female": 590
      },
      {
        "label": "70~74세",
        "total": 768,
        "male": 365,
        "female": 403
      },
      {
        "label": "75~79세",
        "total": 518,
        "male": 238,
        "female": 280
      },
      {
        "label": "80~84세",
        "total": 413,
        "male": 157,
        "female": 256
      },
      {
        "label": "85~89세",
        "total": 234,
        "male": 81,
        "female": 153
      },
      {
        "label": "90~94세",
        "total": 89,
        "male": 18,
        "female": 71
      },
      {
        "label": "95~99세",
        "total": 16,
        "male": 1,
        "female": 15
      },
      {
        "label": "100세 이상",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "derived": {
      "twenties_total": 1520,
      "twenties_female": 750,
      "twenties_male": 770,
      "twenties_pct": 10.2,
      "female_twenties_pct": 5.0,
      "senior_total": 3570,
      "senior_pct": 23.8,
      "foreigner_pct": 2.83,
      "avg_household_size": 2.23
    }
  },
  {
    "dong": "안양6동",
    "gu": "만안구",
    "center": [
      37.384153,
      126.922844
    ],
    "polygon": [
      [
        37.383261,
        126.936009
      ],
      [
        37.383896,
        126.933825
      ],
      [
        37.385795,
        126.932237
      ],
      [
        37.384248,
        126.92579
      ],
      [
        37.383026,
        126.924169
      ],
      [
        37.3809,
        126.921934
      ],
      [
        37.379336,
        126.920582
      ],
      [
        37.377714,
        126.919354
      ],
      [
        37.376934,
        126.919178
      ],
      [
        37.376781,
        126.91753
      ],
      [
        37.377447,
        126.91761
      ],
      [
        37.378941,
        126.917288
      ],
      [
        37.37963,
        126.916634
      ],
      [
        37.38149,
        126.914593
      ],
      [
        37.381781,
        126.91449
      ],
      [
        37.382817,
        126.914549
      ],
      [
        37.383543,
        126.915054
      ],
      [
        37.384895,
        126.917562
      ],
      [
        37.385828,
        126.918918
      ],
      [
        37.387267,
        126.918811
      ],
      [
        37.3883,
        126.920446
      ],
      [
        37.389991,
        126.924087
      ],
      [
        37.390433,
        126.925314
      ],
      [
        37.391571,
        126.927435
      ],
      [
        37.392452,
        126.926708
      ],
      [
        37.394298,
        126.930142
      ],
      [
        37.390438,
        126.933358
      ],
      [
        37.383261,
        126.936009
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 27828,
      "male": 14006,
      "female": 13822,
      "households": 13133,
      "koreans": 26928,
      "foreigners": 900
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1784,
        "male": 868,
        "female": 916
      },
      {
        "label": "10대",
        "total": 1517,
        "male": 797,
        "female": 720
      },
      {
        "label": "20대",
        "total": 3335,
        "male": 1604,
        "female": 1731
      },
      {
        "label": "30대",
        "total": 5523,
        "male": 2969,
        "female": 2554
      },
      {
        "label": "40대",
        "total": 3988,
        "male": 2168,
        "female": 1820
      },
      {
        "label": "50대",
        "total": 4018,
        "male": 1992,
        "female": 2026
      },
      {
        "label": "60대",
        "total": 3835,
        "male": 1856,
        "female": 1979
      },
      {
        "label": "70대",
        "total": 1969,
        "male": 925,
        "female": 1044
      },
      {
        "label": "80+",
        "total": 2,
        "male": 0,
        "female": 2
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 1018,
        "male": 489,
        "female": 529
      },
      {
        "label": "5~9세",
        "total": 766,
        "male": 379,
        "female": 387
      },
      {
        "label": "10~14세",
        "total": 674,
        "male": 353,
        "female": 321
      },
      {
        "label": "15~19세",
        "total": 843,
        "male": 444,
        "female": 399
      },
      {
        "label": "20~24세",
        "total": 1123,
        "male": 540,
        "female": 583
      },
      {
        "label": "25~29세",
        "total": 2212,
        "male": 1064,
        "female": 1148
      },
      {
        "label": "30~34세",
        "total": 3093,
        "male": 1653,
        "female": 1440
      },
      {
        "label": "35~39세",
        "total": 2430,
        "male": 1316,
        "female": 1114
      },
      {
        "label": "40~44세",
        "total": 2205,
        "male": 1212,
        "female": 993
      },
      {
        "label": "45~49세",
        "total": 1783,
        "male": 956,
        "female": 827
      },
      {
        "label": "50~54세",
        "total": 1926,
        "male": 959,
        "female": 967
      },
      {
        "label": "55~59세",
        "total": 2092,
        "male": 1033,
        "female": 1059
      },
      {
        "label": "60~64세",
        "total": 1969,
        "male": 972,
        "female": 997
      },
      {
        "label": "65~69세",
        "total": 1866,
        "male": 884,
        "female": 982
      },
      {
        "label": "70~74세",
        "total": 1186,
        "male": 547,
        "female": 639
      },
      {
        "label": "75~79세",
        "total": 783,
        "male": 378,
        "female": 405
      },
      {
        "label": "80~84세",
        "total": 525,
        "male": 234,
        "female": 291
      },
      {
        "label": "85~89세",
        "total": 288,
        "male": 94,
        "female": 194
      },
      {
        "label": "90~94세",
        "total": 121,
        "male": 37,
        "female": 84
      },
      {
        "label": "95~99세",
        "total": 23,
        "male": 6,
        "female": 17
      },
      {
        "label": "100세 이상",
        "total": 2,
        "male": 0,
        "female": 2
      }
    ],
    "derived": {
      "twenties_total": 3335,
      "twenties_female": 1731,
      "twenties_male": 1604,
      "twenties_pct": 12.0,
      "female_twenties_pct": 6.2,
      "senior_total": 5806,
      "senior_pct": 20.9,
      "foreigner_pct": 3.23,
      "avg_household_size": 2.12
    }
  },
  {
    "dong": "안양7동",
    "gu": "만안구",
    "center": [
      37.386984,
      126.937898
    ],
    "polygon": [
      [
        37.397423,
        126.931491
      ],
      [
        37.394647,
        126.937672
      ],
      [
        37.393498,
        126.939718
      ],
      [
        37.392607,
        126.940552
      ],
      [
        37.392167,
        126.940823
      ],
      [
        37.391822,
        126.941338
      ],
      [
        37.390313,
        126.941739
      ],
      [
        37.389871,
        126.941779
      ],
      [
        37.386135,
        126.941301
      ],
      [
        37.382324,
        126.939443
      ],
      [
        37.381106,
        126.939008
      ],
      [
        37.380548,
        126.93908
      ],
      [
        37.380037,
        126.939451
      ],
      [
        37.379127,
        126.940817
      ],
      [
        37.376762,
        126.941185
      ],
      [
        37.377423,
        126.940739
      ],
      [
        37.378231,
        126.940027
      ],
      [
        37.380613,
        126.937484
      ],
      [
        37.381803,
        126.936647
      ],
      [
        37.383261,
        126.936009
      ],
      [
        37.390438,
        126.933358
      ],
      [
        37.394298,
        126.930142
      ],
      [
        37.395735,
        126.928269
      ],
      [
        37.397423,
        126.931491
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 14794,
      "male": 7310,
      "female": 7484,
      "households": 5804,
      "koreans": 14608,
      "foreigners": 186
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1345,
        "male": 666,
        "female": 679
      },
      {
        "label": "10대",
        "total": 1253,
        "male": 643,
        "female": 610
      },
      {
        "label": "20대",
        "total": 1489,
        "male": 768,
        "female": 721
      },
      {
        "label": "30대",
        "total": 2578,
        "male": 1249,
        "female": 1329
      },
      {
        "label": "40대",
        "total": 2509,
        "male": 1317,
        "female": 1192
      },
      {
        "label": "50대",
        "total": 2189,
        "male": 1060,
        "female": 1129
      },
      {
        "label": "60대",
        "total": 1829,
        "male": 868,
        "female": 961
      },
      {
        "label": "70대",
        "total": 960,
        "male": 432,
        "female": 528
      },
      {
        "label": "80+",
        "total": 4,
        "male": 0,
        "female": 4
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 688,
        "male": 344,
        "female": 344
      },
      {
        "label": "5~9세",
        "total": 657,
        "male": 322,
        "female": 335
      },
      {
        "label": "10~14세",
        "total": 688,
        "male": 348,
        "female": 340
      },
      {
        "label": "15~19세",
        "total": 565,
        "male": 295,
        "female": 270
      },
      {
        "label": "20~24세",
        "total": 608,
        "male": 315,
        "female": 293
      },
      {
        "label": "25~29세",
        "total": 881,
        "male": 453,
        "female": 428
      },
      {
        "label": "30~34세",
        "total": 1321,
        "male": 648,
        "female": 673
      },
      {
        "label": "35~39세",
        "total": 1257,
        "male": 601,
        "female": 656
      },
      {
        "label": "40~44세",
        "total": 1359,
        "male": 727,
        "female": 632
      },
      {
        "label": "45~49세",
        "total": 1150,
        "male": 590,
        "female": 560
      },
      {
        "label": "50~54세",
        "total": 1109,
        "male": 532,
        "female": 577
      },
      {
        "label": "55~59세",
        "total": 1080,
        "male": 528,
        "female": 552
      },
      {
        "label": "60~64세",
        "total": 1008,
        "male": 489,
        "female": 519
      },
      {
        "label": "65~69세",
        "total": 821,
        "male": 379,
        "female": 442
      },
      {
        "label": "70~74세",
        "total": 605,
        "male": 280,
        "female": 325
      },
      {
        "label": "75~79세",
        "total": 355,
        "male": 152,
        "female": 203
      },
      {
        "label": "80~84세",
        "total": 254,
        "male": 109,
        "female": 145
      },
      {
        "label": "85~89세",
        "total": 127,
        "male": 52,
        "female": 75
      },
      {
        "label": "90~94세",
        "total": 52,
        "male": 10,
        "female": 42
      },
      {
        "label": "95~99세",
        "total": 19,
        "male": 4,
        "female": 15
      },
      {
        "label": "100세 이상",
        "total": 4,
        "male": 0,
        "female": 4
      }
    ],
    "derived": {
      "twenties_total": 1489,
      "twenties_female": 721,
      "twenties_male": 768,
      "twenties_pct": 10.1,
      "female_twenties_pct": 4.9,
      "senior_total": 2793,
      "senior_pct": 18.9,
      "foreigner_pct": 1.26,
      "avg_household_size": 2.55
    }
  },
  {
    "dong": "안양8동",
    "gu": "만안구",
    "center": [
      37.379473,
      126.930781
    ],
    "polygon": [
      [
        37.383261,
        126.936009
      ],
      [
        37.382068,
        126.936508
      ],
      [
        37.381043,
        126.937139
      ],
      [
        37.380137,
        126.937945
      ],
      [
        37.378053,
        126.940195
      ],
      [
        37.376762,
        126.941185
      ],
      [
        37.375851,
        126.940076
      ],
      [
        37.376011,
        126.939166
      ],
      [
        37.376556,
        126.937374
      ],
      [
        37.376996,
        126.934894
      ],
      [
        37.37747,
        126.932765
      ],
      [
        37.377638,
        126.926947
      ],
      [
        37.377313,
        126.924137
      ],
      [
        37.376519,
        126.921418
      ],
      [
        37.376564,
        126.919899
      ],
      [
        37.376934,
        126.919178
      ],
      [
        37.377714,
        126.919354
      ],
      [
        37.379336,
        126.920582
      ],
      [
        37.3809,
        126.921934
      ],
      [
        37.383026,
        126.924169
      ],
      [
        37.384248,
        126.92579
      ],
      [
        37.385795,
        126.932237
      ],
      [
        37.383896,
        126.933825
      ],
      [
        37.383261,
        126.936009
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 8271,
      "male": 4251,
      "female": 4020,
      "households": 4132,
      "koreans": 7827,
      "foreigners": 444
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 195,
        "male": 96,
        "female": 99
      },
      {
        "label": "10대",
        "total": 436,
        "male": 231,
        "female": 205
      },
      {
        "label": "20대",
        "total": 986,
        "male": 542,
        "female": 444
      },
      {
        "label": "30대",
        "total": 1002,
        "male": 592,
        "female": 410
      },
      {
        "label": "40대",
        "total": 949,
        "male": 531,
        "female": 418
      },
      {
        "label": "50대",
        "total": 1357,
        "male": 706,
        "female": 651
      },
      {
        "label": "60대",
        "total": 1618,
        "male": 759,
        "female": 859
      },
      {
        "label": "70대",
        "total": 892,
        "male": 433,
        "female": 459
      },
      {
        "label": "80+",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 85,
        "male": 41,
        "female": 44
      },
      {
        "label": "5~9세",
        "total": 110,
        "male": 55,
        "female": 55
      },
      {
        "label": "10~14세",
        "total": 194,
        "male": 108,
        "female": 86
      },
      {
        "label": "15~19세",
        "total": 242,
        "male": 123,
        "female": 119
      },
      {
        "label": "20~24세",
        "total": 411,
        "male": 211,
        "female": 200
      },
      {
        "label": "25~29세",
        "total": 575,
        "male": 331,
        "female": 244
      },
      {
        "label": "30~34세",
        "total": 574,
        "male": 336,
        "female": 238
      },
      {
        "label": "35~39세",
        "total": 428,
        "male": 256,
        "female": 172
      },
      {
        "label": "40~44세",
        "total": 441,
        "male": 259,
        "female": 182
      },
      {
        "label": "45~49세",
        "total": 508,
        "male": 272,
        "female": 236
      },
      {
        "label": "50~54세",
        "total": 610,
        "male": 321,
        "female": 289
      },
      {
        "label": "55~59세",
        "total": 747,
        "male": 385,
        "female": 362
      },
      {
        "label": "60~64세",
        "total": 774,
        "male": 371,
        "female": 403
      },
      {
        "label": "65~69세",
        "total": 844,
        "male": 388,
        "female": 456
      },
      {
        "label": "70~74세",
        "total": 558,
        "male": 275,
        "female": 283
      },
      {
        "label": "75~79세",
        "total": 334,
        "male": 158,
        "female": 176
      },
      {
        "label": "80~84세",
        "total": 225,
        "male": 89,
        "female": 136
      },
      {
        "label": "85~89세",
        "total": 124,
        "male": 45,
        "female": 79
      },
      {
        "label": "90~94세",
        "total": 38,
        "male": 13,
        "female": 25
      },
      {
        "label": "95~99세",
        "total": 5,
        "male": 1,
        "female": 4
      },
      {
        "label": "100세 이상",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "derived": {
      "twenties_total": 986,
      "twenties_female": 444,
      "twenties_male": 542,
      "twenties_pct": 11.9,
      "female_twenties_pct": 5.4,
      "senior_total": 2510,
      "senior_pct": 30.3,
      "foreigner_pct": 5.37,
      "avg_household_size": 2.0
    }
  },
  {
    "dong": "안양9동",
    "gu": "만안구",
    "center": [
      37.378757,
      126.906964
    ],
    "polygon": [
      [
        37.391741,
        126.915843
      ],
      [
        37.390754,
        126.91732
      ],
      [
        37.387845,
        126.918644
      ],
      [
        37.387267,
        126.918811
      ],
      [
        37.385828,
        126.918918
      ],
      [
        37.384895,
        126.917562
      ],
      [
        37.383543,
        126.915054
      ],
      [
        37.382817,
        126.914549
      ],
      [
        37.381781,
        126.91449
      ],
      [
        37.38149,
        126.914593
      ],
      [
        37.37963,
        126.916634
      ],
      [
        37.378941,
        126.917288
      ],
      [
        37.377447,
        126.91761
      ],
      [
        37.376781,
        126.91753
      ],
      [
        37.37588,
        126.916678
      ],
      [
        37.375505,
        126.915495
      ],
      [
        37.375412,
        126.914827
      ],
      [
        37.372846,
        126.913774
      ],
      [
        37.369087,
        126.911706
      ],
      [
        37.368272,
        126.911805
      ],
      [
        37.367836,
        126.911637
      ],
      [
        37.366019,
        126.910497
      ],
      [
        37.363389,
        126.908309
      ],
      [
        37.361637,
        126.907994
      ],
      [
        37.360334,
        126.907592
      ],
      [
        37.359905,
        126.907248
      ],
      [
        37.358752,
        126.905541
      ],
      [
        37.357875,
        126.905044
      ],
      [
        37.357094,
        126.904343
      ],
      [
        37.356988,
        126.904076
      ],
      [
        37.356828,
        126.901189
      ],
      [
        37.358067,
        126.897238
      ],
      [
        37.359376,
        126.896054
      ],
      [
        37.360142,
        126.895606
      ],
      [
        37.366354,
        126.89387
      ],
      [
        37.375271,
        126.891097
      ],
      [
        37.379867,
        126.893446
      ],
      [
        37.38168,
        126.895211
      ],
      [
        37.382426,
        126.895599
      ],
      [
        37.382909,
        126.895418
      ],
      [
        37.383444,
        126.894519
      ],
      [
        37.384103,
        126.894117
      ],
      [
        37.386525,
        126.895099
      ],
      [
        37.387266,
        126.895646
      ],
      [
        37.387371,
        126.895957
      ],
      [
        37.387143,
        126.897636
      ],
      [
        37.387244,
        126.897983
      ],
      [
        37.388788,
        126.898544
      ],
      [
        37.392805,
        126.899504
      ],
      [
        37.394127,
        126.902234
      ],
      [
        37.394813,
        126.904361
      ],
      [
        37.395115,
        126.905749
      ],
      [
        37.394814,
        126.906346
      ],
      [
        37.394954,
        126.907832
      ],
      [
        37.394977,
        126.912703
      ],
      [
        37.394861,
        126.913099
      ],
      [
        37.393738,
        126.913439
      ],
      [
        37.39232,
        126.914114
      ],
      [
        37.391741,
        126.915843
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 15692,
      "male": 7716,
      "female": 7976,
      "households": 6958,
      "koreans": 15597,
      "foreigners": 95
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 544,
        "male": 271,
        "female": 273
      },
      {
        "label": "10대",
        "total": 1025,
        "male": 502,
        "female": 523
      },
      {
        "label": "20대",
        "total": 1574,
        "male": 862,
        "female": 712
      },
      {
        "label": "30대",
        "total": 1835,
        "male": 1023,
        "female": 812
      },
      {
        "label": "40대",
        "total": 1896,
        "male": 1003,
        "female": 893
      },
      {
        "label": "50대",
        "total": 2675,
        "male": 1296,
        "female": 1379
      },
      {
        "label": "60대",
        "total": 3268,
        "male": 1515,
        "female": 1753
      },
      {
        "label": "70대",
        "total": 1877,
        "male": 886,
        "female": 991
      },
      {
        "label": "80+",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 223,
        "male": 115,
        "female": 108
      },
      {
        "label": "5~9세",
        "total": 321,
        "male": 156,
        "female": 165
      },
      {
        "label": "10~14세",
        "total": 479,
        "male": 248,
        "female": 231
      },
      {
        "label": "15~19세",
        "total": 546,
        "male": 254,
        "female": 292
      },
      {
        "label": "20~24세",
        "total": 638,
        "male": 337,
        "female": 301
      },
      {
        "label": "25~29세",
        "total": 936,
        "male": 525,
        "female": 411
      },
      {
        "label": "30~34세",
        "total": 994,
        "male": 547,
        "female": 447
      },
      {
        "label": "35~39세",
        "total": 841,
        "male": 476,
        "female": 365
      },
      {
        "label": "40~44세",
        "total": 896,
        "male": 469,
        "female": 427
      },
      {
        "label": "45~49세",
        "total": 1000,
        "male": 534,
        "female": 466
      },
      {
        "label": "50~54세",
        "total": 1166,
        "male": 562,
        "female": 604
      },
      {
        "label": "55~59세",
        "total": 1509,
        "male": 734,
        "female": 775
      },
      {
        "label": "60~64세",
        "total": 1654,
        "male": 760,
        "female": 894
      },
      {
        "label": "65~69세",
        "total": 1614,
        "male": 755,
        "female": 859
      },
      {
        "label": "70~74세",
        "total": 1124,
        "male": 528,
        "female": 596
      },
      {
        "label": "75~79세",
        "total": 753,
        "male": 358,
        "female": 395
      },
      {
        "label": "80~84세",
        "total": 497,
        "male": 192,
        "female": 305
      },
      {
        "label": "85~89세",
        "total": 276,
        "male": 95,
        "female": 181
      },
      {
        "label": "90~94세",
        "total": 107,
        "male": 28,
        "female": 79
      },
      {
        "label": "95~99세",
        "total": 22,
        "male": 2,
        "female": 20
      },
      {
        "label": "100세 이상",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "derived": {
      "twenties_total": 1574,
      "twenties_female": 712,
      "twenties_male": 862,
      "twenties_pct": 10.0,
      "female_twenties_pct": 4.5,
      "senior_total": 5146,
      "senior_pct": 32.8,
      "foreigner_pct": 0.61,
      "avg_household_size": 2.26
    }
  },
  {
    "dong": "충훈동",
    "gu": "만안구",
    "center": [
      37.409864,
      126.898138
    ],
    "polygon": [
      [
        37.407612,
        126.907447
      ],
      [
        37.404868,
        126.903251
      ],
      [
        37.403491,
        126.897924
      ],
      [
        37.403404,
        126.89748
      ],
      [
        37.403439,
        126.896847
      ],
      [
        37.403896,
        126.895759
      ],
      [
        37.404323,
        126.895296
      ],
      [
        37.40882,
        126.892794
      ],
      [
        37.410213,
        126.891077
      ],
      [
        37.410812,
        126.890776
      ],
      [
        37.411127,
        126.890756
      ],
      [
        37.412242,
        126.891022
      ],
      [
        37.413979,
        126.891844
      ],
      [
        37.416106,
        126.893513
      ],
      [
        37.415951,
        126.893691
      ],
      [
        37.413733,
        126.894541
      ],
      [
        37.413319,
        126.8943
      ],
      [
        37.412807,
        126.894511
      ],
      [
        37.412138,
        126.896803
      ],
      [
        37.411847,
        126.899421
      ],
      [
        37.411735,
        126.901361
      ],
      [
        37.41155,
        126.902253
      ],
      [
        37.411346,
        126.902341
      ],
      [
        37.410946,
        126.902347
      ],
      [
        37.410922,
        126.902896
      ],
      [
        37.410693,
        126.903349
      ],
      [
        37.410425,
        126.903528
      ],
      [
        37.408319,
        126.902443
      ],
      [
        37.408253,
        126.907131
      ],
      [
        37.407612,
        126.907447
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 11807,
      "male": 6017,
      "female": 5790,
      "households": 5297,
      "koreans": 11717,
      "foreigners": 90
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 537,
        "male": 251,
        "female": 286
      },
      {
        "label": "10대",
        "total": 928,
        "male": 497,
        "female": 431
      },
      {
        "label": "20대",
        "total": 1361,
        "male": 788,
        "female": 573
      },
      {
        "label": "30대",
        "total": 1445,
        "male": 785,
        "female": 660
      },
      {
        "label": "40대",
        "total": 1451,
        "male": 745,
        "female": 706
      },
      {
        "label": "50대",
        "total": 2167,
        "male": 1082,
        "female": 1085
      },
      {
        "label": "60대",
        "total": 2269,
        "male": 1150,
        "female": 1119
      },
      {
        "label": "70대",
        "total": 1048,
        "male": 509,
        "female": 539
      },
      {
        "label": "80+",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 261,
        "male": 120,
        "female": 141
      },
      {
        "label": "5~9세",
        "total": 276,
        "male": 131,
        "female": 145
      },
      {
        "label": "10~14세",
        "total": 412,
        "male": 215,
        "female": 197
      },
      {
        "label": "15~19세",
        "total": 516,
        "male": 282,
        "female": 234
      },
      {
        "label": "20~24세",
        "total": 607,
        "male": 349,
        "female": 258
      },
      {
        "label": "25~29세",
        "total": 754,
        "male": 439,
        "female": 315
      },
      {
        "label": "30~34세",
        "total": 793,
        "male": 437,
        "female": 356
      },
      {
        "label": "35~39세",
        "total": 652,
        "male": 348,
        "female": 304
      },
      {
        "label": "40~44세",
        "total": 665,
        "male": 337,
        "female": 328
      },
      {
        "label": "45~49세",
        "total": 786,
        "male": 408,
        "female": 378
      },
      {
        "label": "50~54세",
        "total": 1007,
        "male": 519,
        "female": 488
      },
      {
        "label": "55~59세",
        "total": 1160,
        "male": 563,
        "female": 597
      },
      {
        "label": "60~64세",
        "total": 1167,
        "male": 587,
        "female": 580
      },
      {
        "label": "65~69세",
        "total": 1102,
        "male": 563,
        "female": 539
      },
      {
        "label": "70~74세",
        "total": 628,
        "male": 313,
        "female": 315
      },
      {
        "label": "75~79세",
        "total": 420,
        "male": 196,
        "female": 224
      },
      {
        "label": "80~84세",
        "total": 262,
        "male": 100,
        "female": 162
      },
      {
        "label": "85~89세",
        "total": 175,
        "male": 44,
        "female": 131
      },
      {
        "label": "90~94세",
        "total": 65,
        "male": 13,
        "female": 52
      },
      {
        "label": "95~99세",
        "total": 8,
        "male": 0,
        "female": 8
      },
      {
        "label": "100세 이상",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "derived": {
      "twenties_total": 1361,
      "twenties_female": 573,
      "twenties_male": 788,
      "twenties_pct": 11.5,
      "female_twenties_pct": 4.9,
      "senior_total": 3318,
      "senior_pct": 28.1,
      "foreigner_pct": 0.76,
      "avg_household_size": 2.23
    }
  },
  {
    "dong": "호현동",
    "gu": "만안구",
    "center": [
      37.400069,
      126.890289
    ],
    "polygon": [
      [
        37.416106,
        126.893513
      ],
      [
        37.413979,
        126.891844
      ],
      [
        37.412242,
        126.891022
      ],
      [
        37.411127,
        126.890756
      ],
      [
        37.410812,
        126.890776
      ],
      [
        37.410213,
        126.891077
      ],
      [
        37.40882,
        126.892794
      ],
      [
        37.404323,
        126.895296
      ],
      [
        37.403896,
        126.895759
      ],
      [
        37.403617,
        126.896332
      ],
      [
        37.403439,
        126.896847
      ],
      [
        37.403404,
        126.89748
      ],
      [
        37.404868,
        126.903251
      ],
      [
        37.404617,
        126.904565
      ],
      [
        37.404207,
        126.90567
      ],
      [
        37.40247,
        126.905855
      ],
      [
        37.402564,
        126.907938
      ],
      [
        37.401617,
        126.908042
      ],
      [
        37.401144,
        126.908319
      ],
      [
        37.400586,
        126.90927
      ],
      [
        37.400181,
        126.910252
      ],
      [
        37.399466,
        126.91026
      ],
      [
        37.397789,
        126.908317
      ],
      [
        37.397712,
        126.908142
      ],
      [
        37.39784,
        126.905064
      ],
      [
        37.397083,
        126.904338
      ],
      [
        37.395115,
        126.905749
      ],
      [
        37.394813,
        126.904361
      ],
      [
        37.394127,
        126.902234
      ],
      [
        37.392805,
        126.899504
      ],
      [
        37.388788,
        126.898544
      ],
      [
        37.387244,
        126.897983
      ],
      [
        37.387143,
        126.897636
      ],
      [
        37.387371,
        126.895957
      ],
      [
        37.387266,
        126.895646
      ],
      [
        37.386525,
        126.895099
      ],
      [
        37.384103,
        126.894117
      ],
      [
        37.383444,
        126.894519
      ],
      [
        37.382909,
        126.895418
      ],
      [
        37.382426,
        126.895599
      ],
      [
        37.38168,
        126.895211
      ],
      [
        37.379867,
        126.893446
      ],
      [
        37.375271,
        126.891097
      ],
      [
        37.376577,
        126.886489
      ],
      [
        37.376221,
        126.881912
      ],
      [
        37.38219,
        126.880139
      ],
      [
        37.38729,
        126.877925
      ],
      [
        37.394662,
        126.876093
      ],
      [
        37.397131,
        126.877582
      ],
      [
        37.399067,
        126.877742
      ],
      [
        37.399781,
        126.87771
      ],
      [
        37.400137,
        126.877275
      ],
      [
        37.402054,
        126.877004
      ],
      [
        37.403359,
        126.877283
      ],
      [
        37.404746,
        126.877406
      ],
      [
        37.406581,
        126.875755
      ],
      [
        37.406794,
        126.875411
      ],
      [
        37.406871,
        126.874628
      ],
      [
        37.40666,
        126.872387
      ],
      [
        37.406657,
        126.871217
      ],
      [
        37.406694,
        126.870893
      ],
      [
        37.40691,
        126.870614
      ],
      [
        37.407629,
        126.870333
      ],
      [
        37.408111,
        126.8703
      ],
      [
        37.412144,
        126.871072
      ],
      [
        37.412548,
        126.871241
      ],
      [
        37.412458,
        126.871864
      ],
      [
        37.411682,
        126.875118
      ],
      [
        37.410959,
        126.876181
      ],
      [
        37.410193,
        126.879936
      ],
      [
        37.412556,
        126.888908
      ],
      [
        37.417759,
        126.889605
      ],
      [
        37.417566,
        126.892932
      ],
      [
        37.416106,
        126.893513
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 20295,
      "male": 10080,
      "female": 10215,
      "households": 7533,
      "koreans": 20130,
      "foreigners": 165
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1429,
        "male": 731,
        "female": 698
      },
      {
        "label": "10대",
        "total": 2084,
        "male": 1086,
        "female": 998
      },
      {
        "label": "20대",
        "total": 2248,
        "male": 1195,
        "female": 1053
      },
      {
        "label": "30대",
        "total": 2856,
        "male": 1454,
        "female": 1402
      },
      {
        "label": "40대",
        "total": 3039,
        "male": 1543,
        "female": 1496
      },
      {
        "label": "50대",
        "total": 3258,
        "male": 1520,
        "female": 1738
      },
      {
        "label": "60대",
        "total": 3238,
        "male": 1556,
        "female": 1682
      },
      {
        "label": "70대",
        "total": 1396,
        "male": 703,
        "female": 693
      },
      {
        "label": "80+",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 633,
        "male": 332,
        "female": 301
      },
      {
        "label": "5~9세",
        "total": 796,
        "male": 399,
        "female": 397
      },
      {
        "label": "10~14세",
        "total": 1031,
        "male": 535,
        "female": 496
      },
      {
        "label": "15~19세",
        "total": 1053,
        "male": 551,
        "female": 502
      },
      {
        "label": "20~24세",
        "total": 987,
        "male": 522,
        "female": 465
      },
      {
        "label": "25~29세",
        "total": 1261,
        "male": 673,
        "female": 588
      },
      {
        "label": "30~34세",
        "total": 1451,
        "male": 742,
        "female": 709
      },
      {
        "label": "35~39세",
        "total": 1405,
        "male": 712,
        "female": 693
      },
      {
        "label": "40~44세",
        "total": 1547,
        "male": 801,
        "female": 746
      },
      {
        "label": "45~49세",
        "total": 1492,
        "male": 742,
        "female": 750
      },
      {
        "label": "50~54세",
        "total": 1616,
        "male": 809,
        "female": 807
      },
      {
        "label": "55~59세",
        "total": 1642,
        "male": 711,
        "female": 931
      },
      {
        "label": "60~64세",
        "total": 1698,
        "male": 797,
        "female": 901
      },
      {
        "label": "65~69세",
        "total": 1540,
        "male": 759,
        "female": 781
      },
      {
        "label": "70~74세",
        "total": 838,
        "male": 421,
        "female": 417
      },
      {
        "label": "75~79세",
        "total": 558,
        "male": 282,
        "female": 276
      },
      {
        "label": "80~84세",
        "total": 288,
        "male": 113,
        "female": 175
      },
      {
        "label": "85~89세",
        "total": 191,
        "male": 64,
        "female": 127
      },
      {
        "label": "90~94세",
        "total": 87,
        "male": 23,
        "female": 64
      },
      {
        "label": "95~99세",
        "total": 16,
        "male": 3,
        "female": 13
      },
      {
        "label": "100세 이상",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "derived": {
      "twenties_total": 2248,
      "twenties_female": 1053,
      "twenties_male": 1195,
      "twenties_pct": 11.1,
      "female_twenties_pct": 5.2,
      "senior_total": 4634,
      "senior_pct": 22.8,
      "foreigner_pct": 0.81,
      "avg_household_size": 2.69
    }
  },
  {
    "dong": "갈산동",
    "gu": "동안구",
    "center": [
      37.378279,
      126.965438
    ],
    "polygon": [
      [
        37.380267,
        126.971438
      ],
      [
        37.375206,
        126.967779
      ],
      [
        37.373302,
        126.966246
      ],
      [
        37.372203,
        126.963191
      ],
      [
        37.375092,
        126.960792
      ],
      [
        37.378077,
        126.9592
      ],
      [
        37.380861,
        126.961477
      ],
      [
        37.382022,
        126.964253
      ],
      [
        37.382306,
        126.966108
      ],
      [
        37.381462,
        126.967903
      ],
      [
        37.380267,
        126.971438
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 10359,
      "male": 5030,
      "female": 5329,
      "households": 3849,
      "koreans": 10295,
      "foreigners": 64
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 466,
        "male": 230,
        "female": 236
      },
      {
        "label": "10대",
        "total": 1511,
        "male": 698,
        "female": 813
      },
      {
        "label": "20대",
        "total": 1162,
        "male": 622,
        "female": 540
      },
      {
        "label": "30대",
        "total": 894,
        "male": 467,
        "female": 427
      },
      {
        "label": "40대",
        "total": 1634,
        "male": 743,
        "female": 891
      },
      {
        "label": "50대",
        "total": 1811,
        "male": 917,
        "female": 894
      },
      {
        "label": "60대",
        "total": 1581,
        "male": 759,
        "female": 822
      },
      {
        "label": "70대",
        "total": 813,
        "male": 410,
        "female": 403
      },
      {
        "label": "80+",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 118,
        "male": 61,
        "female": 57
      },
      {
        "label": "5~9세",
        "total": 348,
        "male": 169,
        "female": 179
      },
      {
        "label": "10~14세",
        "total": 786,
        "male": 341,
        "female": 445
      },
      {
        "label": "15~19세",
        "total": 725,
        "male": 357,
        "female": 368
      },
      {
        "label": "20~24세",
        "total": 535,
        "male": 283,
        "female": 252
      },
      {
        "label": "25~29세",
        "total": 627,
        "male": 339,
        "female": 288
      },
      {
        "label": "30~34세",
        "total": 441,
        "male": 252,
        "female": 189
      },
      {
        "label": "35~39세",
        "total": 453,
        "male": 215,
        "female": 238
      },
      {
        "label": "40~44세",
        "total": 720,
        "male": 330,
        "female": 390
      },
      {
        "label": "45~49세",
        "total": 914,
        "male": 413,
        "female": 501
      },
      {
        "label": "50~54세",
        "total": 949,
        "male": 499,
        "female": 450
      },
      {
        "label": "55~59세",
        "total": 862,
        "male": 418,
        "female": 444
      },
      {
        "label": "60~64세",
        "total": 804,
        "male": 391,
        "female": 413
      },
      {
        "label": "65~69세",
        "total": 777,
        "male": 368,
        "female": 409
      },
      {
        "label": "70~74세",
        "total": 483,
        "male": 241,
        "female": 242
      },
      {
        "label": "75~79세",
        "total": 330,
        "male": 169,
        "female": 161
      },
      {
        "label": "80~84세",
        "total": 206,
        "male": 90,
        "female": 116
      },
      {
        "label": "85~89세",
        "total": 128,
        "male": 50,
        "female": 78
      },
      {
        "label": "90~94세",
        "total": 69,
        "male": 19,
        "female": 50
      },
      {
        "label": "95~99세",
        "total": 19,
        "male": 2,
        "female": 17
      },
      {
        "label": "100세 이상",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "derived": {
      "twenties_total": 1162,
      "twenties_female": 540,
      "twenties_male": 622,
      "twenties_pct": 11.2,
      "female_twenties_pct": 5.2,
      "senior_total": 2395,
      "senior_pct": 23.1,
      "foreigner_pct": 0.62,
      "avg_household_size": 2.69
    }
  },
  {
    "dong": "관양동",
    "gu": "동안구",
    "center": [
      37.412563,
      126.964493
    ],
    "polygon": [
      [
        37.403192,
        126.978543
      ],
      [
        37.402301,
        126.976484
      ],
      [
        37.404404,
        126.972892
      ],
      [
        37.404786,
        126.972002
      ],
      [
        37.404863,
        126.971411
      ],
      [
        37.404518,
        126.965553
      ],
      [
        37.404387,
        126.96449
      ],
      [
        37.402192,
        126.964997
      ],
      [
        37.402001,
        126.964421
      ],
      [
        37.40177,
        126.9614
      ],
      [
        37.402182,
        126.957903
      ],
      [
        37.40214,
        126.95746
      ],
      [
        37.40098,
        126.954013
      ],
      [
        37.403798,
        126.953183
      ],
      [
        37.405875,
        126.952869
      ],
      [
        37.408116,
        126.95264
      ],
      [
        37.409293,
        126.952804
      ],
      [
        37.411295,
        126.953869
      ],
      [
        37.414265,
        126.957944
      ],
      [
        37.416321,
        126.959145
      ],
      [
        37.418179,
        126.959693
      ],
      [
        37.421144,
        126.958889
      ],
      [
        37.424245,
        126.957887
      ],
      [
        37.424881,
        126.958637
      ],
      [
        37.426704,
        126.958796
      ],
      [
        37.428078,
        126.959621
      ],
      [
        37.429241,
        126.961331
      ],
      [
        37.428991,
        126.962266
      ],
      [
        37.426874,
        126.96184
      ],
      [
        37.426028,
        126.960912
      ],
      [
        37.424563,
        126.961807
      ],
      [
        37.42247,
        126.962187
      ],
      [
        37.421064,
        126.962635
      ],
      [
        37.419233,
        126.963889
      ],
      [
        37.418212,
        126.966002
      ],
      [
        37.417415,
        126.96837
      ],
      [
        37.414962,
        126.973764
      ],
      [
        37.412603,
        126.975261
      ],
      [
        37.410115,
        126.975749
      ],
      [
        37.409189,
        126.97549
      ],
      [
        37.407136,
        126.975772
      ],
      [
        37.4061,
        126.976154
      ],
      [
        37.403452,
        126.978165
      ],
      [
        37.403192,
        126.978543
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 32333,
      "male": 15822,
      "female": 16511,
      "households": 15277,
      "koreans": 32076,
      "foreigners": 257
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1110,
        "male": 557,
        "female": 553
      },
      {
        "label": "10대",
        "total": 2024,
        "male": 1066,
        "female": 958
      },
      {
        "label": "20대",
        "total": 4147,
        "male": 2235,
        "female": 1912
      },
      {
        "label": "30대",
        "total": 4355,
        "male": 2423,
        "female": 1932
      },
      {
        "label": "40대",
        "total": 3627,
        "male": 1852,
        "female": 1775
      },
      {
        "label": "50대",
        "total": 5764,
        "male": 2630,
        "female": 3134
      },
      {
        "label": "60대",
        "total": 6272,
        "male": 2942,
        "female": 3330
      },
      {
        "label": "70대",
        "total": 3246,
        "male": 1474,
        "female": 1772
      },
      {
        "label": "80+",
        "total": 5,
        "male": 2,
        "female": 3
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 496,
        "male": 247,
        "female": 249
      },
      {
        "label": "5~9세",
        "total": 614,
        "male": 310,
        "female": 304
      },
      {
        "label": "10~14세",
        "total": 843,
        "male": 455,
        "female": 388
      },
      {
        "label": "15~19세",
        "total": 1181,
        "male": 611,
        "female": 570
      },
      {
        "label": "20~24세",
        "total": 1522,
        "male": 808,
        "female": 714
      },
      {
        "label": "25~29세",
        "total": 2625,
        "male": 1427,
        "female": 1198
      },
      {
        "label": "30~34세",
        "total": 2547,
        "male": 1441,
        "female": 1106
      },
      {
        "label": "35~39세",
        "total": 1808,
        "male": 982,
        "female": 826
      },
      {
        "label": "40~44세",
        "total": 1791,
        "male": 975,
        "female": 816
      },
      {
        "label": "45~49세",
        "total": 1836,
        "male": 877,
        "female": 959
      },
      {
        "label": "50~54세",
        "total": 2523,
        "male": 1134,
        "female": 1389
      },
      {
        "label": "55~59세",
        "total": 3241,
        "male": 1496,
        "female": 1745
      },
      {
        "label": "60~64세",
        "total": 3334,
        "male": 1534,
        "female": 1800
      },
      {
        "label": "65~69세",
        "total": 2938,
        "male": 1408,
        "female": 1530
      },
      {
        "label": "70~74세",
        "total": 1985,
        "male": 902,
        "female": 1083
      },
      {
        "label": "75~79세",
        "total": 1261,
        "male": 572,
        "female": 689
      },
      {
        "label": "80~84세",
        "total": 831,
        "male": 311,
        "female": 520
      },
      {
        "label": "85~89세",
        "total": 472,
        "male": 160,
        "female": 312
      },
      {
        "label": "90~94세",
        "total": 184,
        "male": 41,
        "female": 143
      },
      {
        "label": "95~99세",
        "total": 39,
        "male": 11,
        "female": 28
      },
      {
        "label": "100세 이상",
        "total": 5,
        "male": 2,
        "female": 3
      }
    ],
    "derived": {
      "twenties_total": 4147,
      "twenties_female": 1912,
      "twenties_male": 2235,
      "twenties_pct": 12.8,
      "female_twenties_pct": 5.9,
      "senior_total": 9523,
      "senior_pct": 29.5,
      "foreigner_pct": 0.79,
      "avg_household_size": 2.12
    }
  },
  {
    "dong": "귀인동",
    "gu": "동안구",
    "center": [
      37.384081,
      126.968657
    ],
    "polygon": [
      [
        37.386758,
        126.972927
      ],
      [
        37.386769,
        126.972797
      ],
      [
        37.381255,
        126.972227
      ],
      [
        37.380267,
        126.971438
      ],
      [
        37.381462,
        126.967903
      ],
      [
        37.382306,
        126.966108
      ],
      [
        37.382022,
        126.964253
      ],
      [
        37.380861,
        126.961477
      ],
      [
        37.385017,
        126.959205
      ],
      [
        37.388292,
        126.969724
      ],
      [
        37.387205,
        126.972901
      ],
      [
        37.386758,
        126.972927
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 16071,
      "male": 7959,
      "female": 8112,
      "households": 5074,
      "koreans": 16046,
      "foreigners": 25
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1009,
        "male": 540,
        "female": 469
      },
      {
        "label": "10대",
        "total": 3412,
        "male": 1823,
        "female": 1589
      },
      {
        "label": "20대",
        "total": 1564,
        "male": 801,
        "female": 763
      },
      {
        "label": "30대",
        "total": 1052,
        "male": 488,
        "female": 564
      },
      {
        "label": "40대",
        "total": 3513,
        "male": 1555,
        "female": 1958
      },
      {
        "label": "50대",
        "total": 2851,
        "male": 1496,
        "female": 1355
      },
      {
        "label": "60대",
        "total": 1517,
        "male": 750,
        "female": 767
      },
      {
        "label": "70대",
        "total": 719,
        "male": 337,
        "female": 382
      },
      {
        "label": "80+",
        "total": 2,
        "male": 0,
        "female": 2
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 194,
        "male": 99,
        "female": 95
      },
      {
        "label": "5~9세",
        "total": 815,
        "male": 441,
        "female": 374
      },
      {
        "label": "10~14세",
        "total": 1895,
        "male": 1021,
        "female": 874
      },
      {
        "label": "15~19세",
        "total": 1517,
        "male": 802,
        "female": 715
      },
      {
        "label": "20~24세",
        "total": 850,
        "male": 437,
        "female": 413
      },
      {
        "label": "25~29세",
        "total": 714,
        "male": 364,
        "female": 350
      },
      {
        "label": "30~34세",
        "total": 463,
        "male": 242,
        "female": 221
      },
      {
        "label": "35~39세",
        "total": 589,
        "male": 246,
        "female": 343
      },
      {
        "label": "40~44세",
        "total": 1523,
        "male": 642,
        "female": 881
      },
      {
        "label": "45~49세",
        "total": 1990,
        "male": 913,
        "female": 1077
      },
      {
        "label": "50~54세",
        "total": 1739,
        "male": 917,
        "female": 822
      },
      {
        "label": "55~59세",
        "total": 1112,
        "male": 579,
        "female": 533
      },
      {
        "label": "60~64세",
        "total": 852,
        "male": 423,
        "female": 429
      },
      {
        "label": "65~69세",
        "total": 665,
        "male": 327,
        "female": 338
      },
      {
        "label": "70~74세",
        "total": 429,
        "male": 212,
        "female": 217
      },
      {
        "label": "75~79세",
        "total": 290,
        "male": 125,
        "female": 165
      },
      {
        "label": "80~84세",
        "total": 200,
        "male": 89,
        "female": 111
      },
      {
        "label": "85~89세",
        "total": 138,
        "male": 50,
        "female": 88
      },
      {
        "label": "90~94세",
        "total": 57,
        "male": 23,
        "female": 34
      },
      {
        "label": "95~99세",
        "total": 12,
        "male": 3,
        "female": 9
      },
      {
        "label": "100세 이상",
        "total": 2,
        "male": 0,
        "female": 2
      }
    ],
    "derived": {
      "twenties_total": 1564,
      "twenties_female": 763,
      "twenties_male": 801,
      "twenties_pct": 9.7,
      "female_twenties_pct": 4.7,
      "senior_total": 2238,
      "senior_pct": 13.9,
      "foreigner_pct": 0.16,
      "avg_household_size": 3.17
    }
  },
  {
    "dong": "달안동",
    "gu": "동안구",
    "center": [
      37.395129,
      126.951022
    ],
    "polygon": [
      [
        37.392541,
        126.955168
      ],
      [
        37.391104,
        126.950963
      ],
      [
        37.395263,
        126.948752
      ],
      [
        37.398602,
        126.945427
      ],
      [
        37.400724,
        126.950653
      ],
      [
        37.392541,
        126.955168
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 9459,
      "male": 4205,
      "female": 5254,
      "households": 5373,
      "koreans": 9386,
      "foreigners": 73
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 360,
        "male": 203,
        "female": 157
      },
      {
        "label": "10대",
        "total": 449,
        "male": 247,
        "female": 202
      },
      {
        "label": "20대",
        "total": 1108,
        "male": 486,
        "female": 622
      },
      {
        "label": "30대",
        "total": 2169,
        "male": 1083,
        "female": 1086
      },
      {
        "label": "40대",
        "total": 1326,
        "male": 614,
        "female": 712
      },
      {
        "label": "50대",
        "total": 1419,
        "male": 631,
        "female": 788
      },
      {
        "label": "60대",
        "total": 1364,
        "male": 535,
        "female": 829
      },
      {
        "label": "70대",
        "total": 672,
        "male": 261,
        "female": 411
      },
      {
        "label": "80+",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 201,
        "male": 114,
        "female": 87
      },
      {
        "label": "5~9세",
        "total": 159,
        "male": 89,
        "female": 70
      },
      {
        "label": "10~14세",
        "total": 194,
        "male": 99,
        "female": 95
      },
      {
        "label": "15~19세",
        "total": 255,
        "male": 148,
        "female": 107
      },
      {
        "label": "20~24세",
        "total": 317,
        "male": 145,
        "female": 172
      },
      {
        "label": "25~29세",
        "total": 791,
        "male": 341,
        "female": 450
      },
      {
        "label": "30~34세",
        "total": 1301,
        "male": 631,
        "female": 670
      },
      {
        "label": "35~39세",
        "total": 868,
        "male": 452,
        "female": 416
      },
      {
        "label": "40~44세",
        "total": 722,
        "male": 359,
        "female": 363
      },
      {
        "label": "45~49세",
        "total": 604,
        "male": 255,
        "female": 349
      },
      {
        "label": "50~54세",
        "total": 728,
        "male": 337,
        "female": 391
      },
      {
        "label": "55~59세",
        "total": 691,
        "male": 294,
        "female": 397
      },
      {
        "label": "60~64세",
        "total": 664,
        "male": 260,
        "female": 404
      },
      {
        "label": "65~69세",
        "total": 700,
        "male": 275,
        "female": 425
      },
      {
        "label": "70~74세",
        "total": 396,
        "male": 177,
        "female": 219
      },
      {
        "label": "75~79세",
        "total": 276,
        "male": 84,
        "female": 192
      },
      {
        "label": "80~84세",
        "total": 269,
        "male": 77,
        "female": 192
      },
      {
        "label": "85~89세",
        "total": 151,
        "male": 35,
        "female": 116
      },
      {
        "label": "90~94세",
        "total": 79,
        "male": 14,
        "female": 65
      },
      {
        "label": "95~99세",
        "total": 20,
        "male": 1,
        "female": 19
      },
      {
        "label": "100세 이상",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "derived": {
      "twenties_total": 1108,
      "twenties_female": 622,
      "twenties_male": 486,
      "twenties_pct": 11.7,
      "female_twenties_pct": 6.6,
      "senior_total": 2036,
      "senior_pct": 21.5,
      "foreigner_pct": 0.77,
      "avg_household_size": 1.76
    }
  },
  {
    "dong": "범계동",
    "gu": "동안구",
    "center": [
      37.388634,
      126.953602
    ],
    "polygon": [
      [
        37.390533,
        126.956235
      ],
      [
        37.385017,
        126.959205
      ],
      [
        37.382843,
        126.952716
      ],
      [
        37.387431,
        126.950176
      ],
      [
        37.389073,
        126.948117
      ],
      [
        37.391104,
        126.950963
      ],
      [
        37.392541,
        126.955168
      ],
      [
        37.390533,
        126.956235
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 15107,
      "male": 7265,
      "female": 7842,
      "households": 5872,
      "koreans": 14995,
      "foreigners": 112
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 871,
        "male": 456,
        "female": 415
      },
      {
        "label": "10대",
        "total": 1990,
        "male": 1019,
        "female": 971
      },
      {
        "label": "20대",
        "total": 1733,
        "male": 904,
        "female": 829
      },
      {
        "label": "30대",
        "total": 2204,
        "male": 1061,
        "female": 1143
      },
      {
        "label": "40대",
        "total": 2398,
        "male": 1072,
        "female": 1326
      },
      {
        "label": "50대",
        "total": 2641,
        "male": 1289,
        "female": 1352
      },
      {
        "label": "60대",
        "total": 1796,
        "male": 866,
        "female": 930
      },
      {
        "label": "70대",
        "total": 822,
        "male": 372,
        "female": 450
      },
      {
        "label": "80+",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 335,
        "male": 162,
        "female": 173
      },
      {
        "label": "5~9세",
        "total": 536,
        "male": 294,
        "female": 242
      },
      {
        "label": "10~14세",
        "total": 1027,
        "male": 520,
        "female": 507
      },
      {
        "label": "15~19세",
        "total": 963,
        "male": 499,
        "female": 464
      },
      {
        "label": "20~24세",
        "total": 814,
        "male": 408,
        "female": 406
      },
      {
        "label": "25~29세",
        "total": 919,
        "male": 496,
        "female": 423
      },
      {
        "label": "30~34세",
        "total": 1211,
        "male": 579,
        "female": 632
      },
      {
        "label": "35~39세",
        "total": 993,
        "male": 482,
        "female": 511
      },
      {
        "label": "40~44세",
        "total": 1058,
        "male": 468,
        "female": 590
      },
      {
        "label": "45~49세",
        "total": 1340,
        "male": 604,
        "female": 736
      },
      {
        "label": "50~54세",
        "total": 1450,
        "male": 708,
        "female": 742
      },
      {
        "label": "55~59세",
        "total": 1191,
        "male": 581,
        "female": 610
      },
      {
        "label": "60~64세",
        "total": 975,
        "male": 453,
        "female": 522
      },
      {
        "label": "65~69세",
        "total": 821,
        "male": 413,
        "female": 408
      },
      {
        "label": "70~74세",
        "total": 486,
        "male": 233,
        "female": 253
      },
      {
        "label": "75~79세",
        "total": 336,
        "male": 139,
        "female": 197
      },
      {
        "label": "80~84세",
        "total": 251,
        "male": 109,
        "female": 142
      },
      {
        "label": "85~89세",
        "total": 175,
        "male": 50,
        "female": 125
      },
      {
        "label": "90~94세",
        "total": 86,
        "male": 21,
        "female": 65
      },
      {
        "label": "95~99세",
        "total": 28,
        "male": 3,
        "female": 25
      },
      {
        "label": "100세 이상",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "derived": {
      "twenties_total": 1733,
      "twenties_female": 829,
      "twenties_male": 904,
      "twenties_pct": 11.5,
      "female_twenties_pct": 5.5,
      "senior_total": 2618,
      "senior_pct": 17.3,
      "foreigner_pct": 0.74,
      "avg_household_size": 2.57
    }
  },
  {
    "dong": "부림동",
    "gu": "동안구",
    "center": [
      37.399039,
      126.958604
    ],
    "polygon": [
      [
        37.401931,
        126.959996
      ],
      [
        37.400867,
        126.960507
      ],
      [
        37.395476,
        126.964119
      ],
      [
        37.39362,
        126.965157
      ],
      [
        37.390533,
        126.956235
      ],
      [
        37.400724,
        126.950653
      ],
      [
        37.40098,
        126.954013
      ],
      [
        37.40214,
        126.95746
      ],
      [
        37.402182,
        126.957903
      ],
      [
        37.401931,
        126.959996
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 26630,
      "male": 12836,
      "female": 13794,
      "households": 12697,
      "koreans": 26355,
      "foreigners": 275
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1586,
        "male": 823,
        "female": 763
      },
      {
        "label": "10대",
        "total": 2063,
        "male": 1064,
        "female": 999
      },
      {
        "label": "20대",
        "total": 3219,
        "male": 1536,
        "female": 1683
      },
      {
        "label": "30대",
        "total": 5830,
        "male": 2994,
        "female": 2836
      },
      {
        "label": "40대",
        "total": 4178,
        "male": 2029,
        "female": 2149
      },
      {
        "label": "50대",
        "total": 4350,
        "male": 2051,
        "female": 2299
      },
      {
        "label": "60대",
        "total": 3028,
        "male": 1392,
        "female": 1636
      },
      {
        "label": "70대",
        "total": 1299,
        "male": 585,
        "female": 714
      },
      {
        "label": "80+",
        "total": 1,
        "male": 1,
        "female": 0
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 934,
        "male": 502,
        "female": 432
      },
      {
        "label": "5~9세",
        "total": 652,
        "male": 321,
        "female": 331
      },
      {
        "label": "10~14세",
        "total": 1004,
        "male": 509,
        "female": 495
      },
      {
        "label": "15~19세",
        "total": 1059,
        "male": 555,
        "female": 504
      },
      {
        "label": "20~24세",
        "total": 1194,
        "male": 577,
        "female": 617
      },
      {
        "label": "25~29세",
        "total": 2025,
        "male": 959,
        "female": 1066
      },
      {
        "label": "30~34세",
        "total": 3208,
        "male": 1596,
        "female": 1612
      },
      {
        "label": "35~39세",
        "total": 2622,
        "male": 1398,
        "female": 1224
      },
      {
        "label": "40~44세",
        "total": 2186,
        "male": 1110,
        "female": 1076
      },
      {
        "label": "45~49세",
        "total": 1992,
        "male": 919,
        "female": 1073
      },
      {
        "label": "50~54세",
        "total": 2346,
        "male": 1111,
        "female": 1235
      },
      {
        "label": "55~59세",
        "total": 2004,
        "male": 940,
        "female": 1064
      },
      {
        "label": "60~64세",
        "total": 1613,
        "male": 734,
        "female": 879
      },
      {
        "label": "65~69세",
        "total": 1415,
        "male": 658,
        "female": 757
      },
      {
        "label": "70~74세",
        "total": 783,
        "male": 388,
        "female": 395
      },
      {
        "label": "75~79세",
        "total": 516,
        "male": 197,
        "female": 319
      },
      {
        "label": "80~84세",
        "total": 401,
        "male": 136,
        "female": 265
      },
      {
        "label": "85~89세",
        "total": 275,
        "male": 92,
        "female": 183
      },
      {
        "label": "90~94세",
        "total": 104,
        "male": 22,
        "female": 82
      },
      {
        "label": "95~99세",
        "total": 21,
        "male": 5,
        "female": 16
      },
      {
        "label": "100세 이상",
        "total": 1,
        "male": 1,
        "female": 0
      }
    ],
    "derived": {
      "twenties_total": 3219,
      "twenties_female": 1683,
      "twenties_male": 1536,
      "twenties_pct": 12.1,
      "female_twenties_pct": 6.3,
      "senior_total": 4328,
      "senior_pct": 16.3,
      "foreigner_pct": 1.03,
      "avg_household_size": 2.1
    }
  },
  {
    "dong": "부흥동",
    "gu": "동안구",
    "center": [
      37.3933,
      126.946883
    ],
    "polygon": [
      [
        37.391104,
        126.950963
      ],
      [
        37.389073,
        126.948117
      ],
      [
        37.39242,
        126.944016
      ],
      [
        37.395537,
        126.939941
      ],
      [
        37.398602,
        126.945427
      ],
      [
        37.395263,
        126.948752
      ],
      [
        37.391104,
        126.950963
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 15979,
      "male": 7630,
      "female": 8349,
      "households": 6316,
      "koreans": 15946,
      "foreigners": 33
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 990,
        "male": 519,
        "female": 471
      },
      {
        "label": "10대",
        "total": 1811,
        "male": 954,
        "female": 857
      },
      {
        "label": "20대",
        "total": 1767,
        "male": 915,
        "female": 852
      },
      {
        "label": "30대",
        "total": 2031,
        "male": 1001,
        "female": 1030
      },
      {
        "label": "40대",
        "total": 2484,
        "male": 1125,
        "female": 1359
      },
      {
        "label": "50대",
        "total": 2730,
        "male": 1326,
        "female": 1404
      },
      {
        "label": "60대",
        "total": 2229,
        "male": 991,
        "female": 1238
      },
      {
        "label": "70대",
        "total": 1270,
        "male": 592,
        "female": 678
      },
      {
        "label": "80+",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 428,
        "male": 213,
        "female": 215
      },
      {
        "label": "5~9세",
        "total": 562,
        "male": 306,
        "female": 256
      },
      {
        "label": "10~14세",
        "total": 828,
        "male": 437,
        "female": 391
      },
      {
        "label": "15~19세",
        "total": 983,
        "male": 517,
        "female": 466
      },
      {
        "label": "20~24세",
        "total": 831,
        "male": 440,
        "female": 391
      },
      {
        "label": "25~29세",
        "total": 936,
        "male": 475,
        "female": 461
      },
      {
        "label": "30~34세",
        "total": 1028,
        "male": 507,
        "female": 521
      },
      {
        "label": "35~39세",
        "total": 1003,
        "male": 494,
        "female": 509
      },
      {
        "label": "40~44세",
        "total": 1168,
        "male": 538,
        "female": 630
      },
      {
        "label": "45~49세",
        "total": 1316,
        "male": 587,
        "female": 729
      },
      {
        "label": "50~54세",
        "total": 1460,
        "male": 708,
        "female": 752
      },
      {
        "label": "55~59세",
        "total": 1270,
        "male": 618,
        "female": 652
      },
      {
        "label": "60~64세",
        "total": 1121,
        "male": 512,
        "female": 609
      },
      {
        "label": "65~69세",
        "total": 1108,
        "male": 479,
        "female": 629
      },
      {
        "label": "70~74세",
        "total": 790,
        "male": 389,
        "female": 401
      },
      {
        "label": "75~79세",
        "total": 480,
        "male": 203,
        "female": 277
      },
      {
        "label": "80~84세",
        "total": 332,
        "male": 118,
        "female": 214
      },
      {
        "label": "85~89세",
        "total": 173,
        "male": 56,
        "female": 117
      },
      {
        "label": "90~94세",
        "total": 103,
        "male": 19,
        "female": 84
      },
      {
        "label": "95~99세",
        "total": 25,
        "male": 5,
        "female": 20
      },
      {
        "label": "100세 이상",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "derived": {
      "twenties_total": 1767,
      "twenties_female": 852,
      "twenties_male": 915,
      "twenties_pct": 11.1,
      "female_twenties_pct": 5.3,
      "senior_total": 3500,
      "senior_pct": 21.9,
      "foreigner_pct": 0.21,
      "avg_household_size": 2.53
    }
  },
  {
    "dong": "비산1동",
    "gu": "동안구",
    "center": [
      37.406046,
      126.936703
    ],
    "polygon": [
      [
        37.413036,
        126.938197
      ],
      [
        37.411807,
        126.940082
      ],
      [
        37.411674,
        126.940168
      ],
      [
        37.410562,
        126.940009
      ],
      [
        37.408967,
        126.939041
      ],
      [
        37.406887,
        126.938325
      ],
      [
        37.406367,
        126.939606
      ],
      [
        37.406371,
        126.939969
      ],
      [
        37.405653,
        126.941054
      ],
      [
        37.405092,
        126.941605
      ],
      [
        37.404933,
        126.941694
      ],
      [
        37.404408,
        126.941751
      ],
      [
        37.402438,
        126.941239
      ],
      [
        37.400723,
        126.942901
      ],
      [
        37.400509,
        126.941162
      ],
      [
        37.3993,
        126.941494
      ],
      [
        37.398837,
        126.941452
      ],
      [
        37.398787,
        126.935374
      ],
      [
        37.398653,
        126.934103
      ],
      [
        37.398396,
        126.933322
      ],
      [
        37.397423,
        126.931491
      ],
      [
        37.399429,
        126.929552
      ],
      [
        37.400834,
        126.927839
      ],
      [
        37.404944,
        126.928237
      ],
      [
        37.407343,
        126.927516
      ],
      [
        37.408852,
        126.927786
      ],
      [
        37.413385,
        126.929404
      ],
      [
        37.413794,
        126.933059
      ],
      [
        37.413315,
        126.935224
      ],
      [
        37.413537,
        126.936548
      ],
      [
        37.414186,
        126.937083
      ],
      [
        37.413036,
        126.938197
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 28340,
      "male": 13729,
      "female": 14611,
      "households": 10546,
      "koreans": 28231,
      "foreigners": 109
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 2452,
        "male": 1239,
        "female": 1213
      },
      {
        "label": "10대",
        "total": 2366,
        "male": 1197,
        "female": 1169
      },
      {
        "label": "20대",
        "total": 3051,
        "male": 1546,
        "female": 1505
      },
      {
        "label": "30대",
        "total": 4603,
        "male": 2221,
        "female": 2382
      },
      {
        "label": "40대",
        "total": 4352,
        "male": 2183,
        "female": 2169
      },
      {
        "label": "50대",
        "total": 4548,
        "male": 2127,
        "female": 2421
      },
      {
        "label": "60대",
        "total": 4179,
        "male": 1948,
        "female": 2231
      },
      {
        "label": "70대",
        "total": 1901,
        "male": 940,
        "female": 961
      },
      {
        "label": "80+",
        "total": 4,
        "male": 0,
        "female": 4
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 1196,
        "male": 601,
        "female": 595
      },
      {
        "label": "5~9세",
        "total": 1256,
        "male": 638,
        "female": 618
      },
      {
        "label": "10~14세",
        "total": 1201,
        "male": 612,
        "female": 589
      },
      {
        "label": "15~19세",
        "total": 1165,
        "male": 585,
        "female": 580
      },
      {
        "label": "20~24세",
        "total": 1379,
        "male": 716,
        "female": 663
      },
      {
        "label": "25~29세",
        "total": 1672,
        "male": 830,
        "female": 842
      },
      {
        "label": "30~34세",
        "total": 2059,
        "male": 973,
        "female": 1086
      },
      {
        "label": "35~39세",
        "total": 2544,
        "male": 1248,
        "female": 1296
      },
      {
        "label": "40~44세",
        "total": 2355,
        "male": 1233,
        "female": 1122
      },
      {
        "label": "45~49세",
        "total": 1997,
        "male": 950,
        "female": 1047
      },
      {
        "label": "50~54세",
        "total": 2290,
        "male": 1050,
        "female": 1240
      },
      {
        "label": "55~59세",
        "total": 2258,
        "male": 1077,
        "female": 1181
      },
      {
        "label": "60~64세",
        "total": 2163,
        "male": 997,
        "female": 1166
      },
      {
        "label": "65~69세",
        "total": 2016,
        "male": 951,
        "female": 1065
      },
      {
        "label": "70~74세",
        "total": 1215,
        "male": 610,
        "female": 605
      },
      {
        "label": "75~79세",
        "total": 686,
        "male": 330,
        "female": 356
      },
      {
        "label": "80~84세",
        "total": 406,
        "male": 169,
        "female": 237
      },
      {
        "label": "85~89세",
        "total": 240,
        "male": 83,
        "female": 157
      },
      {
        "label": "90~94세",
        "total": 98,
        "male": 25,
        "female": 73
      },
      {
        "label": "95~99세",
        "total": 31,
        "male": 9,
        "female": 22
      },
      {
        "label": "100세 이상",
        "total": 4,
        "male": 0,
        "female": 4
      }
    ],
    "derived": {
      "twenties_total": 3051,
      "twenties_female": 1505,
      "twenties_male": 1546,
      "twenties_pct": 10.8,
      "female_twenties_pct": 5.3,
      "senior_total": 6084,
      "senior_pct": 21.5,
      "foreigner_pct": 0.38,
      "avg_household_size": 2.69
    }
  },
  {
    "dong": "비산2동",
    "gu": "동안구",
    "center": [
      37.396753,
      126.940005
    ],
    "polygon": [
      [
        37.398602,
        126.945427
      ],
      [
        37.395537,
        126.939941
      ],
      [
        37.39242,
        126.944016
      ],
      [
        37.391822,
        126.941338
      ],
      [
        37.392167,
        126.940823
      ],
      [
        37.392607,
        126.940552
      ],
      [
        37.393498,
        126.939718
      ],
      [
        37.394647,
        126.937672
      ],
      [
        37.397423,
        126.931491
      ],
      [
        37.398396,
        126.933322
      ],
      [
        37.398653,
        126.934103
      ],
      [
        37.398787,
        126.935374
      ],
      [
        37.398837,
        126.941452
      ],
      [
        37.3993,
        126.941494
      ],
      [
        37.400509,
        126.941162
      ],
      [
        37.400723,
        126.942901
      ],
      [
        37.399027,
        126.943876
      ],
      [
        37.398602,
        126.945427
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 13240,
      "male": 6508,
      "female": 6732,
      "households": 4771,
      "koreans": 13192,
      "foreigners": 48
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1136,
        "male": 631,
        "female": 505
      },
      {
        "label": "10대",
        "total": 1166,
        "male": 574,
        "female": 592
      },
      {
        "label": "20대",
        "total": 1431,
        "male": 729,
        "female": 702
      },
      {
        "label": "30대",
        "total": 2049,
        "male": 988,
        "female": 1061
      },
      {
        "label": "40대",
        "total": 2052,
        "male": 1043,
        "female": 1009
      },
      {
        "label": "50대",
        "total": 2160,
        "male": 1025,
        "female": 1135
      },
      {
        "label": "60대",
        "total": 1900,
        "male": 915,
        "female": 985
      },
      {
        "label": "70대",
        "total": 909,
        "male": 431,
        "female": 478
      },
      {
        "label": "80+",
        "total": 3,
        "male": 0,
        "female": 3
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 550,
        "male": 314,
        "female": 236
      },
      {
        "label": "5~9세",
        "total": 586,
        "male": 317,
        "female": 269
      },
      {
        "label": "10~14세",
        "total": 566,
        "male": 276,
        "female": 290
      },
      {
        "label": "15~19세",
        "total": 600,
        "male": 298,
        "female": 302
      },
      {
        "label": "20~24세",
        "total": 705,
        "male": 364,
        "female": 341
      },
      {
        "label": "25~29세",
        "total": 726,
        "male": 365,
        "female": 361
      },
      {
        "label": "30~34세",
        "total": 926,
        "male": 442,
        "female": 484
      },
      {
        "label": "35~39세",
        "total": 1123,
        "male": 546,
        "female": 577
      },
      {
        "label": "40~44세",
        "total": 1097,
        "male": 579,
        "female": 518
      },
      {
        "label": "45~49세",
        "total": 955,
        "male": 464,
        "female": 491
      },
      {
        "label": "50~54세",
        "total": 1098,
        "male": 517,
        "female": 581
      },
      {
        "label": "55~59세",
        "total": 1062,
        "male": 508,
        "female": 554
      },
      {
        "label": "60~64세",
        "total": 1038,
        "male": 484,
        "female": 554
      },
      {
        "label": "65~69세",
        "total": 862,
        "male": 431,
        "female": 431
      },
      {
        "label": "70~74세",
        "total": 541,
        "male": 255,
        "female": 286
      },
      {
        "label": "75~79세",
        "total": 368,
        "male": 176,
        "female": 192
      },
      {
        "label": "80~84세",
        "total": 221,
        "male": 92,
        "female": 129
      },
      {
        "label": "85~89세",
        "total": 100,
        "male": 41,
        "female": 59
      },
      {
        "label": "90~94세",
        "total": 51,
        "male": 8,
        "female": 43
      },
      {
        "label": "95~99세",
        "total": 14,
        "male": 1,
        "female": 13
      },
      {
        "label": "100세 이상",
        "total": 3,
        "male": 0,
        "female": 3
      }
    ],
    "derived": {
      "twenties_total": 1431,
      "twenties_female": 702,
      "twenties_male": 729,
      "twenties_pct": 10.8,
      "female_twenties_pct": 5.3,
      "senior_total": 2812,
      "senior_pct": 21.2,
      "foreigner_pct": 0.36,
      "avg_household_size": 2.78
    }
  },
  {
    "dong": "비산3동",
    "gu": "동안구",
    "center": [
      37.420453,
      126.951432
    ],
    "polygon": [
      [
        37.429241,
        126.961331
      ],
      [
        37.428078,
        126.959621
      ],
      [
        37.426704,
        126.958796
      ],
      [
        37.424881,
        126.958637
      ],
      [
        37.424245,
        126.957887
      ],
      [
        37.421144,
        126.958889
      ],
      [
        37.418179,
        126.959693
      ],
      [
        37.416321,
        126.959145
      ],
      [
        37.414265,
        126.957944
      ],
      [
        37.411295,
        126.953869
      ],
      [
        37.409293,
        126.952804
      ],
      [
        37.408116,
        126.95264
      ],
      [
        37.405875,
        126.952869
      ],
      [
        37.403798,
        126.953183
      ],
      [
        37.40098,
        126.954013
      ],
      [
        37.400724,
        126.950653
      ],
      [
        37.398602,
        126.945427
      ],
      [
        37.399027,
        126.943876
      ],
      [
        37.400723,
        126.942901
      ],
      [
        37.402438,
        126.941239
      ],
      [
        37.404408,
        126.941751
      ],
      [
        37.404933,
        126.941694
      ],
      [
        37.405092,
        126.941605
      ],
      [
        37.405653,
        126.941054
      ],
      [
        37.406371,
        126.939969
      ],
      [
        37.406367,
        126.939606
      ],
      [
        37.406887,
        126.938325
      ],
      [
        37.408967,
        126.939041
      ],
      [
        37.410562,
        126.940009
      ],
      [
        37.411674,
        126.940168
      ],
      [
        37.411807,
        126.940082
      ],
      [
        37.413036,
        126.938197
      ],
      [
        37.414186,
        126.937083
      ],
      [
        37.419085,
        126.94181
      ],
      [
        37.421363,
        126.947416
      ],
      [
        37.421711,
        126.946309
      ],
      [
        37.422306,
        126.948023
      ],
      [
        37.427829,
        126.94813
      ],
      [
        37.42987,
        126.948925
      ],
      [
        37.430964,
        126.948303
      ],
      [
        37.431965,
        126.948861
      ],
      [
        37.435544,
        126.947877
      ],
      [
        37.438523,
        126.948223
      ],
      [
        37.438418,
        126.951024
      ],
      [
        37.439209,
        126.95259
      ],
      [
        37.438594,
        126.955247
      ],
      [
        37.4392,
        126.959246
      ],
      [
        37.440261,
        126.959975
      ],
      [
        37.440314,
        126.963021
      ],
      [
        37.440768,
        126.963803
      ],
      [
        37.440306,
        126.965477
      ],
      [
        37.439144,
        126.964965
      ],
      [
        37.438674,
        126.965034
      ],
      [
        37.437639,
        126.964312
      ],
      [
        37.431389,
        126.964239
      ],
      [
        37.431069,
        126.962645
      ],
      [
        37.428991,
        126.962266
      ],
      [
        37.429241,
        126.961331
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 18020,
      "male": 8917,
      "female": 9103,
      "households": 7719,
      "koreans": 17899,
      "foreigners": 121
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1252,
        "male": 609,
        "female": 643
      },
      {
        "label": "10대",
        "total": 1239,
        "male": 642,
        "female": 597
      },
      {
        "label": "20대",
        "total": 2074,
        "male": 1103,
        "female": 971
      },
      {
        "label": "30대",
        "total": 2959,
        "male": 1535,
        "female": 1424
      },
      {
        "label": "40대",
        "total": 2349,
        "male": 1232,
        "female": 1117
      },
      {
        "label": "50대",
        "total": 2971,
        "male": 1387,
        "female": 1584
      },
      {
        "label": "60대",
        "total": 3079,
        "male": 1500,
        "female": 1579
      },
      {
        "label": "70대",
        "total": 1308,
        "male": 629,
        "female": 679
      },
      {
        "label": "80+",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 667,
        "male": 331,
        "female": 336
      },
      {
        "label": "5~9세",
        "total": 585,
        "male": 278,
        "female": 307
      },
      {
        "label": "10~14세",
        "total": 578,
        "male": 289,
        "female": 289
      },
      {
        "label": "15~19세",
        "total": 661,
        "male": 353,
        "female": 308
      },
      {
        "label": "20~24세",
        "total": 806,
        "male": 430,
        "female": 376
      },
      {
        "label": "25~29세",
        "total": 1268,
        "male": 673,
        "female": 595
      },
      {
        "label": "30~34세",
        "total": 1574,
        "male": 804,
        "female": 770
      },
      {
        "label": "35~39세",
        "total": 1385,
        "male": 731,
        "female": 654
      },
      {
        "label": "40~44세",
        "total": 1247,
        "male": 657,
        "female": 590
      },
      {
        "label": "45~49세",
        "total": 1102,
        "male": 575,
        "female": 527
      },
      {
        "label": "50~54세",
        "total": 1424,
        "male": 666,
        "female": 758
      },
      {
        "label": "55~59세",
        "total": 1547,
        "male": 721,
        "female": 826
      },
      {
        "label": "60~64세",
        "total": 1641,
        "male": 801,
        "female": 840
      },
      {
        "label": "65~69세",
        "total": 1438,
        "male": 699,
        "female": 739
      },
      {
        "label": "70~74세",
        "total": 773,
        "male": 374,
        "female": 399
      },
      {
        "label": "75~79세",
        "total": 535,
        "male": 255,
        "female": 280
      },
      {
        "label": "80~84세",
        "total": 359,
        "male": 131,
        "female": 228
      },
      {
        "label": "85~89세",
        "total": 202,
        "male": 56,
        "female": 146
      },
      {
        "label": "90~94세",
        "total": 89,
        "male": 20,
        "female": 69
      },
      {
        "label": "95~99세",
        "total": 18,
        "male": 6,
        "female": 12
      },
      {
        "label": "100세 이상",
        "total": 0,
        "male": 0,
        "female": 0
      }
    ],
    "derived": {
      "twenties_total": 2074,
      "twenties_female": 971,
      "twenties_male": 1103,
      "twenties_pct": 11.5,
      "female_twenties_pct": 5.4,
      "senior_total": 4387,
      "senior_pct": 24.3,
      "foreigner_pct": 0.67,
      "avg_household_size": 2.33
    }
  },
  {
    "dong": "신촌동",
    "gu": "동안구",
    "center": [
      37.380706,
      126.957213
    ],
    "polygon": [
      [
        37.380861,
        126.961477
      ],
      [
        37.378077,
        126.9592
      ],
      [
        37.376943,
        126.955803
      ],
      [
        37.378708,
        126.954921
      ],
      [
        37.382335,
        126.952903
      ],
      [
        37.382843,
        126.952716
      ],
      [
        37.385017,
        126.959205
      ],
      [
        37.380861,
        126.961477
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 12265,
      "male": 5949,
      "female": 6316,
      "households": 4425,
      "koreans": 12232,
      "foreigners": 33
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 788,
        "male": 404,
        "female": 384
      },
      {
        "label": "10대",
        "total": 1538,
        "male": 763,
        "female": 775
      },
      {
        "label": "20대",
        "total": 1344,
        "male": 690,
        "female": 654
      },
      {
        "label": "30대",
        "total": 1512,
        "male": 750,
        "female": 762
      },
      {
        "label": "40대",
        "total": 1940,
        "male": 915,
        "female": 1025
      },
      {
        "label": "50대",
        "total": 2133,
        "male": 1004,
        "female": 1129
      },
      {
        "label": "60대",
        "total": 1811,
        "male": 860,
        "female": 951
      },
      {
        "label": "70대",
        "total": 846,
        "male": 435,
        "female": 411
      },
      {
        "label": "80+",
        "total": 2,
        "male": 0,
        "female": 2
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 320,
        "male": 168,
        "female": 152
      },
      {
        "label": "5~9세",
        "total": 468,
        "male": 236,
        "female": 232
      },
      {
        "label": "10~14세",
        "total": 683,
        "male": 344,
        "female": 339
      },
      {
        "label": "15~19세",
        "total": 855,
        "male": 419,
        "female": 436
      },
      {
        "label": "20~24세",
        "total": 649,
        "male": 327,
        "female": 322
      },
      {
        "label": "25~29세",
        "total": 695,
        "male": 363,
        "female": 332
      },
      {
        "label": "30~34세",
        "total": 720,
        "male": 353,
        "female": 367
      },
      {
        "label": "35~39세",
        "total": 792,
        "male": 397,
        "female": 395
      },
      {
        "label": "40~44세",
        "total": 932,
        "male": 441,
        "female": 491
      },
      {
        "label": "45~49세",
        "total": 1008,
        "male": 474,
        "female": 534
      },
      {
        "label": "50~54세",
        "total": 1117,
        "male": 522,
        "female": 595
      },
      {
        "label": "55~59세",
        "total": 1016,
        "male": 482,
        "female": 534
      },
      {
        "label": "60~64세",
        "total": 941,
        "male": 433,
        "female": 508
      },
      {
        "label": "65~69세",
        "total": 870,
        "male": 427,
        "female": 443
      },
      {
        "label": "70~74세",
        "total": 501,
        "male": 271,
        "female": 230
      },
      {
        "label": "75~79세",
        "total": 345,
        "male": 164,
        "female": 181
      },
      {
        "label": "80~84세",
        "total": 157,
        "male": 69,
        "female": 88
      },
      {
        "label": "85~89세",
        "total": 98,
        "male": 35,
        "female": 63
      },
      {
        "label": "90~94세",
        "total": 46,
        "male": 8,
        "female": 38
      },
      {
        "label": "95~99세",
        "total": 17,
        "male": 2,
        "female": 15
      },
      {
        "label": "100세 이상",
        "total": 2,
        "male": 0,
        "female": 2
      }
    ],
    "derived": {
      "twenties_total": 1344,
      "twenties_female": 654,
      "twenties_male": 690,
      "twenties_pct": 11.0,
      "female_twenties_pct": 5.3,
      "senior_total": 2659,
      "senior_pct": 21.7,
      "foreigner_pct": 0.27,
      "avg_household_size": 2.77
    }
  },
  {
    "dong": "인덕원동",
    "gu": "동안구",
    "center": [
      37.399203,
      126.973136
    ],
    "polygon": [
      [
        37.403192,
        126.978543
      ],
      [
        37.403029,
        126.980454
      ],
      [
        37.402816,
        126.980833
      ],
      [
        37.401835,
        126.981933
      ],
      [
        37.400346,
        126.98268
      ],
      [
        37.398838,
        126.98219
      ],
      [
        37.398044,
        126.981552
      ],
      [
        37.397696,
        126.980871
      ],
      [
        37.395892,
        126.979506
      ],
      [
        37.396451,
        126.97772
      ],
      [
        37.396642,
        126.976618
      ],
      [
        37.396462,
        126.97386
      ],
      [
        37.395149,
        126.973798
      ],
      [
        37.393766,
        126.974247
      ],
      [
        37.392333,
        126.974483
      ],
      [
        37.391674,
        126.974228
      ],
      [
        37.390698,
        126.971086
      ],
      [
        37.390841,
        126.969439
      ],
      [
        37.39599,
        126.968812
      ],
      [
        37.395546,
        126.964072
      ],
      [
        37.400867,
        126.960507
      ],
      [
        37.401931,
        126.959996
      ],
      [
        37.401772,
        126.961571
      ],
      [
        37.401969,
        126.964255
      ],
      [
        37.402192,
        126.964997
      ],
      [
        37.404387,
        126.96449
      ],
      [
        37.404575,
        126.96627
      ],
      [
        37.404863,
        126.971411
      ],
      [
        37.404786,
        126.972002
      ],
      [
        37.404404,
        126.972892
      ],
      [
        37.402301,
        126.976484
      ],
      [
        37.403192,
        126.978543
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 18133,
      "male": 9306,
      "female": 8827,
      "households": 8756,
      "koreans": 17870,
      "foreigners": 263
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 846,
        "male": 428,
        "female": 418
      },
      {
        "label": "10대",
        "total": 1152,
        "male": 580,
        "female": 572
      },
      {
        "label": "20대",
        "total": 2499,
        "male": 1372,
        "female": 1127
      },
      {
        "label": "30대",
        "total": 3008,
        "male": 1683,
        "female": 1325
      },
      {
        "label": "40대",
        "total": 2348,
        "male": 1216,
        "female": 1132
      },
      {
        "label": "50대",
        "total": 3107,
        "male": 1558,
        "female": 1549
      },
      {
        "label": "60대",
        "total": 2830,
        "male": 1412,
        "female": 1418
      },
      {
        "label": "70대",
        "total": 1364,
        "male": 631,
        "female": 733
      },
      {
        "label": "80+",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 421,
        "male": 215,
        "female": 206
      },
      {
        "label": "5~9세",
        "total": 425,
        "male": 213,
        "female": 212
      },
      {
        "label": "10~14세",
        "total": 543,
        "male": 279,
        "female": 264
      },
      {
        "label": "15~19세",
        "total": 609,
        "male": 301,
        "female": 308
      },
      {
        "label": "20~24세",
        "total": 893,
        "male": 431,
        "female": 462
      },
      {
        "label": "25~29세",
        "total": 1606,
        "male": 941,
        "female": 665
      },
      {
        "label": "30~34세",
        "total": 1714,
        "male": 975,
        "female": 739
      },
      {
        "label": "35~39세",
        "total": 1294,
        "male": 708,
        "female": 586
      },
      {
        "label": "40~44세",
        "total": 1217,
        "male": 650,
        "female": 567
      },
      {
        "label": "45~49세",
        "total": 1131,
        "male": 566,
        "female": 565
      },
      {
        "label": "50~54세",
        "total": 1523,
        "male": 756,
        "female": 767
      },
      {
        "label": "55~59세",
        "total": 1584,
        "male": 802,
        "female": 782
      },
      {
        "label": "60~64세",
        "total": 1579,
        "male": 781,
        "female": 798
      },
      {
        "label": "65~69세",
        "total": 1251,
        "male": 631,
        "female": 620
      },
      {
        "label": "70~74세",
        "total": 819,
        "male": 379,
        "female": 440
      },
      {
        "label": "75~79세",
        "total": 545,
        "male": 252,
        "female": 293
      },
      {
        "label": "80~84세",
        "total": 408,
        "male": 173,
        "female": 235
      },
      {
        "label": "85~89세",
        "total": 214,
        "male": 79,
        "female": 135
      },
      {
        "label": "90~94세",
        "total": 78,
        "male": 22,
        "female": 56
      },
      {
        "label": "95~99세",
        "total": 15,
        "male": 3,
        "female": 12
      },
      {
        "label": "100세 이상",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "derived": {
      "twenties_total": 2499,
      "twenties_female": 1127,
      "twenties_male": 1372,
      "twenties_pct": 13.8,
      "female_twenties_pct": 6.2,
      "senior_total": 4195,
      "senior_pct": 23.1,
      "foreigner_pct": 1.45,
      "avg_household_size": 2.07
    }
  },
  {
    "dong": "평안동",
    "gu": "동안구",
    "center": [
      37.391335,
      126.96526
    ],
    "polygon": [
      [
        37.390841,
        126.969439
      ],
      [
        37.388292,
        126.969724
      ],
      [
        37.385017,
        126.959205
      ],
      [
        37.390533,
        126.956235
      ],
      [
        37.39362,
        126.965157
      ],
      [
        37.395546,
        126.964072
      ],
      [
        37.39599,
        126.968812
      ],
      [
        37.390841,
        126.969439
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 22412,
      "male": 10922,
      "female": 11490,
      "households": 8056,
      "koreans": 22351,
      "foreigners": 61
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1922,
        "male": 974,
        "female": 948
      },
      {
        "label": "10대",
        "total": 3333,
        "male": 1714,
        "female": 1619
      },
      {
        "label": "20대",
        "total": 2088,
        "male": 1084,
        "female": 1004
      },
      {
        "label": "30대",
        "total": 3125,
        "male": 1493,
        "female": 1632
      },
      {
        "label": "40대",
        "total": 4498,
        "male": 2112,
        "female": 2386
      },
      {
        "label": "50대",
        "total": 3621,
        "male": 1847,
        "female": 1774
      },
      {
        "label": "60대",
        "total": 2179,
        "male": 1010,
        "female": 1169
      },
      {
        "label": "70대",
        "total": 986,
        "male": 486,
        "female": 500
      },
      {
        "label": "80+",
        "total": 4,
        "male": 0,
        "female": 4
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 710,
        "male": 357,
        "female": 353
      },
      {
        "label": "5~9세",
        "total": 1212,
        "male": 617,
        "female": 595
      },
      {
        "label": "10~14세",
        "total": 1797,
        "male": 904,
        "female": 893
      },
      {
        "label": "15~19세",
        "total": 1536,
        "male": 810,
        "female": 726
      },
      {
        "label": "20~24세",
        "total": 1047,
        "male": 557,
        "female": 490
      },
      {
        "label": "25~29세",
        "total": 1041,
        "male": 527,
        "female": 514
      },
      {
        "label": "30~34세",
        "total": 1470,
        "male": 727,
        "female": 743
      },
      {
        "label": "35~39세",
        "total": 1655,
        "male": 766,
        "female": 889
      },
      {
        "label": "40~44세",
        "total": 2176,
        "male": 1025,
        "female": 1151
      },
      {
        "label": "45~49세",
        "total": 2322,
        "male": 1087,
        "female": 1235
      },
      {
        "label": "50~54세",
        "total": 2101,
        "male": 1075,
        "female": 1026
      },
      {
        "label": "55~59세",
        "total": 1520,
        "male": 772,
        "female": 748
      },
      {
        "label": "60~64세",
        "total": 1099,
        "male": 496,
        "female": 603
      },
      {
        "label": "65~69세",
        "total": 1080,
        "male": 514,
        "female": 566
      },
      {
        "label": "70~74세",
        "total": 614,
        "male": 327,
        "female": 287
      },
      {
        "label": "75~79세",
        "total": 372,
        "male": 159,
        "female": 213
      },
      {
        "label": "80~84세",
        "total": 280,
        "male": 105,
        "female": 175
      },
      {
        "label": "85~89세",
        "total": 199,
        "male": 55,
        "female": 144
      },
      {
        "label": "90~94세",
        "total": 90,
        "male": 16,
        "female": 74
      },
      {
        "label": "95~99세",
        "total": 26,
        "male": 3,
        "female": 23
      },
      {
        "label": "100세 이상",
        "total": 4,
        "male": 0,
        "female": 4
      }
    ],
    "derived": {
      "twenties_total": 2088,
      "twenties_female": 1004,
      "twenties_male": 1084,
      "twenties_pct": 9.3,
      "female_twenties_pct": 4.5,
      "senior_total": 3169,
      "senior_pct": 14.1,
      "foreigner_pct": 0.27,
      "avg_household_size": 2.78
    }
  },
  {
    "dong": "평촌동",
    "gu": "동안구",
    "center": [
      37.392574,
      126.975938
    ],
    "polygon": [
      [
        37.395892,
        126.979506
      ],
      [
        37.394379,
        126.98183
      ],
      [
        37.393347,
        126.981178
      ],
      [
        37.393102,
        126.980822
      ],
      [
        37.392707,
        126.979442
      ],
      [
        37.392306,
        126.978805
      ],
      [
        37.391692,
        126.978417
      ],
      [
        37.388467,
        126.974164
      ],
      [
        37.386758,
        126.972927
      ],
      [
        37.387205,
        126.972901
      ],
      [
        37.388292,
        126.969724
      ],
      [
        37.390841,
        126.969439
      ],
      [
        37.390698,
        126.971086
      ],
      [
        37.391674,
        126.974228
      ],
      [
        37.392333,
        126.974483
      ],
      [
        37.393766,
        126.974247
      ],
      [
        37.395149,
        126.973798
      ],
      [
        37.396462,
        126.97386
      ],
      [
        37.396642,
        126.976618
      ],
      [
        37.396451,
        126.97772
      ],
      [
        37.395892,
        126.979506
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 14908,
      "male": 7325,
      "female": 7583,
      "households": 5368,
      "koreans": 14872,
      "foreigners": 36
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1016,
        "male": 522,
        "female": 494
      },
      {
        "label": "10대",
        "total": 1489,
        "male": 731,
        "female": 758
      },
      {
        "label": "20대",
        "total": 1733,
        "male": 901,
        "female": 832
      },
      {
        "label": "30대",
        "total": 2123,
        "male": 1090,
        "female": 1033
      },
      {
        "label": "40대",
        "total": 2111,
        "male": 1029,
        "female": 1082
      },
      {
        "label": "50대",
        "total": 2791,
        "male": 1279,
        "female": 1512
      },
      {
        "label": "60대",
        "total": 2291,
        "male": 1183,
        "female": 1108
      },
      {
        "label": "70대",
        "total": 828,
        "male": 398,
        "female": 430
      },
      {
        "label": "80+",
        "total": 2,
        "male": 1,
        "female": 1
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 480,
        "male": 239,
        "female": 241
      },
      {
        "label": "5~9세",
        "total": 536,
        "male": 283,
        "female": 253
      },
      {
        "label": "10~14세",
        "total": 744,
        "male": 358,
        "female": 386
      },
      {
        "label": "15~19세",
        "total": 745,
        "male": 373,
        "female": 372
      },
      {
        "label": "20~24세",
        "total": 753,
        "male": 389,
        "female": 364
      },
      {
        "label": "25~29세",
        "total": 980,
        "male": 512,
        "female": 468
      },
      {
        "label": "30~34세",
        "total": 1135,
        "male": 592,
        "female": 543
      },
      {
        "label": "35~39세",
        "total": 988,
        "male": 498,
        "female": 490
      },
      {
        "label": "40~44세",
        "total": 1062,
        "male": 526,
        "female": 536
      },
      {
        "label": "45~49세",
        "total": 1049,
        "male": 503,
        "female": 546
      },
      {
        "label": "50~54세",
        "total": 1255,
        "male": 571,
        "female": 684
      },
      {
        "label": "55~59세",
        "total": 1536,
        "male": 708,
        "female": 828
      },
      {
        "label": "60~64세",
        "total": 1374,
        "male": 719,
        "female": 655
      },
      {
        "label": "65~69세",
        "total": 917,
        "male": 464,
        "female": 453
      },
      {
        "label": "70~74세",
        "total": 503,
        "male": 242,
        "female": 261
      },
      {
        "label": "75~79세",
        "total": 325,
        "male": 156,
        "female": 169
      },
      {
        "label": "80~84세",
        "total": 221,
        "male": 88,
        "female": 133
      },
      {
        "label": "85~89세",
        "total": 198,
        "male": 65,
        "female": 133
      },
      {
        "label": "90~94세",
        "total": 63,
        "male": 19,
        "female": 44
      },
      {
        "label": "95~99세",
        "total": 6,
        "male": 2,
        "female": 4
      },
      {
        "label": "100세 이상",
        "total": 2,
        "male": 1,
        "female": 1
      }
    ],
    "derived": {
      "twenties_total": 1733,
      "twenties_female": 832,
      "twenties_male": 901,
      "twenties_pct": 11.6,
      "female_twenties_pct": 5.6,
      "senior_total": 3121,
      "senior_pct": 20.9,
      "foreigner_pct": 0.24,
      "avg_household_size": 2.78
    }
  },
  {
    "dong": "호계1동",
    "gu": "동안구",
    "center": [
      37.372681,
      126.954014
    ],
    "polygon": [
      [
        37.372203,
        126.963191
      ],
      [
        37.371178,
        126.961307
      ],
      [
        37.370702,
        126.959705
      ],
      [
        37.370082,
        126.95711
      ],
      [
        37.369051,
        126.953627
      ],
      [
        37.36876,
        126.952904
      ],
      [
        37.367374,
        126.950343
      ],
      [
        37.368974,
        126.94857
      ],
      [
        37.369979,
        126.947075
      ],
      [
        37.373034,
        126.945551
      ],
      [
        37.373778,
        126.945595
      ],
      [
        37.375658,
        126.946694
      ],
      [
        37.375324,
        126.947796
      ],
      [
        37.374547,
        126.951339
      ],
      [
        37.374938,
        126.954058
      ],
      [
        37.375728,
        126.956424
      ],
      [
        37.376943,
        126.955803
      ],
      [
        37.378077,
        126.9592
      ],
      [
        37.375092,
        126.960792
      ],
      [
        37.372203,
        126.963191
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 27031,
      "male": 13493,
      "female": 13538,
      "households": 10312,
      "koreans": 26915,
      "foreigners": 116
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 3214,
        "male": 1610,
        "female": 1604
      },
      {
        "label": "10대",
        "total": 3011,
        "male": 1586,
        "female": 1425
      },
      {
        "label": "20대",
        "total": 2350,
        "male": 1158,
        "female": 1192
      },
      {
        "label": "30대",
        "total": 5300,
        "male": 2595,
        "female": 2705
      },
      {
        "label": "40대",
        "total": 5388,
        "male": 2778,
        "female": 2610
      },
      {
        "label": "50대",
        "total": 3667,
        "male": 1843,
        "female": 1824
      },
      {
        "label": "60대",
        "total": 2512,
        "male": 1199,
        "female": 1313
      },
      {
        "label": "70대",
        "total": 1079,
        "male": 520,
        "female": 559
      },
      {
        "label": "80+",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 1497,
        "male": 761,
        "female": 736
      },
      {
        "label": "5~9세",
        "total": 1717,
        "male": 849,
        "female": 868
      },
      {
        "label": "10~14세",
        "total": 1787,
        "male": 928,
        "female": 859
      },
      {
        "label": "15~19세",
        "total": 1224,
        "male": 658,
        "female": 566
      },
      {
        "label": "20~24세",
        "total": 1019,
        "male": 521,
        "female": 498
      },
      {
        "label": "25~29세",
        "total": 1331,
        "male": 637,
        "female": 694
      },
      {
        "label": "30~34세",
        "total": 2325,
        "male": 1106,
        "female": 1219
      },
      {
        "label": "35~39세",
        "total": 2975,
        "male": 1489,
        "female": 1486
      },
      {
        "label": "40~44세",
        "total": 3057,
        "male": 1556,
        "female": 1501
      },
      {
        "label": "45~49세",
        "total": 2331,
        "male": 1222,
        "female": 1109
      },
      {
        "label": "50~54세",
        "total": 2011,
        "male": 1014,
        "female": 997
      },
      {
        "label": "55~59세",
        "total": 1656,
        "male": 829,
        "female": 827
      },
      {
        "label": "60~64세",
        "total": 1352,
        "male": 632,
        "female": 720
      },
      {
        "label": "65~69세",
        "total": 1160,
        "male": 567,
        "female": 593
      },
      {
        "label": "70~74세",
        "total": 706,
        "male": 338,
        "female": 368
      },
      {
        "label": "75~79세",
        "total": 373,
        "male": 182,
        "female": 191
      },
      {
        "label": "80~84세",
        "total": 214,
        "male": 87,
        "female": 127
      },
      {
        "label": "85~89세",
        "total": 119,
        "male": 52,
        "female": 67
      },
      {
        "label": "90~94세",
        "total": 50,
        "male": 8,
        "female": 42
      },
      {
        "label": "95~99세",
        "total": 10,
        "male": 4,
        "female": 6
      },
      {
        "label": "100세 이상",
        "total": 1,
        "male": 0,
        "female": 1
      }
    ],
    "derived": {
      "twenties_total": 2350,
      "twenties_female": 1192,
      "twenties_male": 1158,
      "twenties_pct": 8.7,
      "female_twenties_pct": 4.4,
      "senior_total": 3592,
      "senior_pct": 13.3,
      "foreigner_pct": 0.43,
      "avg_household_size": 2.62
    }
  },
  {
    "dong": "호계2동",
    "gu": "동안구",
    "center": [
      37.382115,
      126.946106
    ],
    "polygon": [
      [
        37.389073,
        126.948117
      ],
      [
        37.387523,
        126.950086
      ],
      [
        37.386889,
        126.950523
      ],
      [
        37.382843,
        126.952716
      ],
      [
        37.382335,
        126.952903
      ],
      [
        37.378708,
        126.954921
      ],
      [
        37.375728,
        126.956424
      ],
      [
        37.374938,
        126.954058
      ],
      [
        37.374547,
        126.951339
      ],
      [
        37.375324,
        126.947796
      ],
      [
        37.375658,
        126.946694
      ],
      [
        37.376255,
        126.946196
      ],
      [
        37.377013,
        126.945283
      ],
      [
        37.377989,
        126.943798
      ],
      [
        37.378514,
        126.942205
      ],
      [
        37.379206,
        126.94066
      ],
      [
        37.379975,
        126.93951
      ],
      [
        37.380399,
        126.939158
      ],
      [
        37.380967,
        126.939007
      ],
      [
        37.381461,
        126.939083
      ],
      [
        37.386135,
        126.941301
      ],
      [
        37.389871,
        126.941779
      ],
      [
        37.390313,
        126.941739
      ],
      [
        37.391822,
        126.941338
      ],
      [
        37.39242,
        126.944016
      ],
      [
        37.389073,
        126.948117
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 27138,
      "male": 13227,
      "female": 13911,
      "households": 10542,
      "koreans": 27009,
      "foreigners": 129
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1982,
        "male": 1020,
        "female": 962
      },
      {
        "label": "10대",
        "total": 2471,
        "male": 1234,
        "female": 1237
      },
      {
        "label": "20대",
        "total": 3165,
        "male": 1572,
        "female": 1593
      },
      {
        "label": "30대",
        "total": 4511,
        "male": 2286,
        "female": 2225
      },
      {
        "label": "40대",
        "total": 4158,
        "male": 2068,
        "female": 2090
      },
      {
        "label": "50대",
        "total": 4439,
        "male": 2066,
        "female": 2373
      },
      {
        "label": "60대",
        "total": 3836,
        "male": 1837,
        "female": 1999
      },
      {
        "label": "70대",
        "total": 1728,
        "male": 825,
        "female": 903
      },
      {
        "label": "80+",
        "total": 2,
        "male": 1,
        "female": 1
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 1046,
        "male": 568,
        "female": 478
      },
      {
        "label": "5~9세",
        "total": 936,
        "male": 452,
        "female": 484
      },
      {
        "label": "10~14세",
        "total": 1186,
        "male": 583,
        "female": 603
      },
      {
        "label": "15~19세",
        "total": 1285,
        "male": 651,
        "female": 634
      },
      {
        "label": "20~24세",
        "total": 1355,
        "male": 684,
        "female": 671
      },
      {
        "label": "25~29세",
        "total": 1810,
        "male": 888,
        "female": 922
      },
      {
        "label": "30~34세",
        "total": 2286,
        "male": 1137,
        "female": 1149
      },
      {
        "label": "35~39세",
        "total": 2225,
        "male": 1149,
        "female": 1076
      },
      {
        "label": "40~44세",
        "total": 2064,
        "male": 1055,
        "female": 1009
      },
      {
        "label": "45~49세",
        "total": 2094,
        "male": 1013,
        "female": 1081
      },
      {
        "label": "50~54세",
        "total": 2235,
        "male": 1044,
        "female": 1191
      },
      {
        "label": "55~59세",
        "total": 2204,
        "male": 1022,
        "female": 1182
      },
      {
        "label": "60~64세",
        "total": 1981,
        "male": 961,
        "female": 1020
      },
      {
        "label": "65~69세",
        "total": 1855,
        "male": 876,
        "female": 979
      },
      {
        "label": "70~74세",
        "total": 1074,
        "male": 527,
        "female": 547
      },
      {
        "label": "75~79세",
        "total": 654,
        "male": 298,
        "female": 356
      },
      {
        "label": "80~84세",
        "total": 395,
        "male": 162,
        "female": 233
      },
      {
        "label": "85~89세",
        "total": 214,
        "male": 69,
        "female": 145
      },
      {
        "label": "90~94세",
        "total": 89,
        "male": 23,
        "female": 66
      },
      {
        "label": "95~99세",
        "total": 19,
        "male": 4,
        "female": 15
      },
      {
        "label": "100세 이상",
        "total": 2,
        "male": 1,
        "female": 1
      }
    ],
    "derived": {
      "twenties_total": 3165,
      "twenties_female": 1593,
      "twenties_male": 1572,
      "twenties_pct": 11.7,
      "female_twenties_pct": 5.9,
      "senior_total": 5566,
      "senior_pct": 20.5,
      "foreigner_pct": 0.48,
      "avg_household_size": 2.57
    }
  },
  {
    "dong": "호계3동",
    "gu": "동안구",
    "center": [
      37.367533,
      126.961677
    ],
    "polygon": [
      [
        37.372753,
        126.965757
      ],
      [
        37.371979,
        126.965366
      ],
      [
        37.371721,
        126.965316
      ],
      [
        37.36877,
        126.965445
      ],
      [
        37.367351,
        126.965354
      ],
      [
        37.366373,
        126.965005
      ],
      [
        37.365149,
        126.96434
      ],
      [
        37.364636,
        126.964502
      ],
      [
        37.364021,
        126.96541
      ],
      [
        37.363248,
        126.966171
      ],
      [
        37.362476,
        126.966242
      ],
      [
        37.362187,
        126.966126
      ],
      [
        37.361768,
        126.964368
      ],
      [
        37.361555,
        126.962136
      ],
      [
        37.365448,
        126.957765
      ],
      [
        37.366031,
        126.95702
      ],
      [
        37.366229,
        126.955653
      ],
      [
        37.366294,
        126.953125
      ],
      [
        37.367374,
        126.950343
      ],
      [
        37.36876,
        126.952904
      ],
      [
        37.369051,
        126.953627
      ],
      [
        37.370082,
        126.95711
      ],
      [
        37.370702,
        126.959705
      ],
      [
        37.371178,
        126.961307
      ],
      [
        37.372203,
        126.963191
      ],
      [
        37.373302,
        126.966246
      ],
      [
        37.372753,
        126.965757
      ]
    ],
    "boundarySource": "vuski/admdongkor#ver20251231",
    "population": {
      "total": 24024,
      "male": 12019,
      "female": 12005,
      "households": 9506,
      "koreans": 23860,
      "foreigners": 164
    },
    "ageBuckets": [
      {
        "label": "0~9세",
        "total": 1634,
        "male": 821,
        "female": 813
      },
      {
        "label": "10대",
        "total": 1911,
        "male": 973,
        "female": 938
      },
      {
        "label": "20대",
        "total": 2787,
        "male": 1445,
        "female": 1342
      },
      {
        "label": "30대",
        "total": 3904,
        "male": 2027,
        "female": 1877
      },
      {
        "label": "40대",
        "total": 3334,
        "male": 1737,
        "female": 1597
      },
      {
        "label": "50대",
        "total": 4017,
        "male": 1914,
        "female": 2103
      },
      {
        "label": "60대",
        "total": 3933,
        "male": 1931,
        "female": 2002
      },
      {
        "label": "70대",
        "total": 1684,
        "male": 877,
        "female": 807
      },
      {
        "label": "80+",
        "total": 6,
        "male": 2,
        "female": 4
      }
    ],
    "ageDetailed": [
      {
        "label": "0~4세",
        "total": 840,
        "male": 409,
        "female": 431
      },
      {
        "label": "5~9세",
        "total": 794,
        "male": 412,
        "female": 382
      },
      {
        "label": "10~14세",
        "total": 921,
        "male": 472,
        "female": 449
      },
      {
        "label": "15~19세",
        "total": 990,
        "male": 501,
        "female": 489
      },
      {
        "label": "20~24세",
        "total": 1096,
        "male": 566,
        "female": 530
      },
      {
        "label": "25~29세",
        "total": 1691,
        "male": 879,
        "female": 812
      },
      {
        "label": "30~34세",
        "total": 2013,
        "male": 1038,
        "female": 975
      },
      {
        "label": "35~39세",
        "total": 1891,
        "male": 989,
        "female": 902
      },
      {
        "label": "40~44세",
        "total": 1764,
        "male": 936,
        "female": 828
      },
      {
        "label": "45~49세",
        "total": 1570,
        "male": 801,
        "female": 769
      },
      {
        "label": "50~54세",
        "total": 1846,
        "male": 882,
        "female": 964
      },
      {
        "label": "55~59세",
        "total": 2171,
        "male": 1032,
        "female": 1139
      },
      {
        "label": "60~64세",
        "total": 2082,
        "male": 994,
        "female": 1088
      },
      {
        "label": "65~69세",
        "total": 1851,
        "male": 937,
        "female": 914
      },
      {
        "label": "70~74세",
        "total": 1089,
        "male": 573,
        "female": 516
      },
      {
        "label": "75~79세",
        "total": 595,
        "male": 304,
        "female": 291
      },
      {
        "label": "80~84세",
        "total": 328,
        "male": 140,
        "female": 188
      },
      {
        "label": "85~89세",
        "total": 220,
        "male": 74,
        "female": 146
      },
      {
        "label": "90~94세",
        "total": 83,
        "male": 13,
        "female": 70
      },
      {
        "label": "95~99세",
        "total": 19,
        "male": 3,
        "female": 16
      },
      {
        "label": "100세 이상",
        "total": 6,
        "male": 2,
        "female": 4
      }
    ],
    "derived": {
      "twenties_total": 2787,
      "twenties_female": 1342,
      "twenties_male": 1445,
      "twenties_pct": 11.6,
      "female_twenties_pct": 5.6,
      "senior_total": 5623,
      "senior_pct": 23.4,
      "foreigner_pct": 0.68,
      "avg_household_size": 2.53
    }
  }
];


// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------
export function getDong(name) {
  return dongs.find((d) => d.dong === name);
}

export function rankByMetric(metricFn) {
  return [...dongs]
    .map((d) => ({ dong: d.dong, gu: d.gu, value: metricFn(d) }))
    .sort((a, b) => b.value - a.value);
}

// Compute a 0–100 heat intensity for a given metric across all dongs
export function heatIntensity(metricKey) {
  const values = dongs.map((d) => readMetric(d, metricKey));
  const min = Math.min(...values);
  const max = Math.max(...values);
  return dongs.reduce((acc, d) => {
    const v = readMetric(d, metricKey);
    const t = max === min ? 0.5 : (v - min) / (max - min);
    acc[d.dong] = t; // 0–1
    return acc;
  }, {});
}

export function readMetric(d, key) {
  switch (key) {
    case 'population':
      return d.population.total;
    case 'femaleTwenties':
      return d.derived.female_twenties_pct;
    case 'maleTwenties':
      return d.derived.twenties_male / d.population.total * 100;
    case 'twenties':
      return d.derived.twenties_pct;
    case 'foreigner':
      return d.derived.foreigner_pct;
    case 'senior':
      return d.derived.senior_pct;
    case 'households':
      return d.population.households;
    default:
      return 0;
  }
}
