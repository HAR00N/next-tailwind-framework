const SideMenuItems = [
  {
    name: "Dashboards",
    icon: "solar:widget-2-line-duotone",
    items: [{ name: "대시보드", icon: "solar:atom-line-duotone", path: "/dashboard" }],
  },
  {
    name: "Peoples",
    icon: "solar:users-group-two-rounded-bold-duotone",
    items: [
      { name: "조직 관리", icon: "solar:buildings-2-bold-duotone", path: "/organizations" },
      { name: "관리자 관리", icon: "solar:shield-user-bold", path: "/managers" },
      { name: "이용자 관리", icon: "solar:user-bold", path: "/users" },
    ],
  },
  {
    name: "LMS",
    icon: "solar:layers-line-duotone",
    items: [
      { name: "License 관리", icon: "solar:atom-line-duotone", path: "/lms/licenses" },
      { name: "API Key 매핑", icon: "solar:chart-line-duotone", path: "/lms/licenseMapping" },
      { name: "스케줄러 관리", icon: "solar:screencast-2-line-duotone", path: "/lms/schedulers" },
    ],
  },
  {
    name: "Billings",
    icon: "solar:bill-check-line-duotone",
    items: [
      { name: "요금제 관리", icon: "solar:atom-line-duotone", path: "/billings/information" },
      { name: "과금 정보", icon: "solar:chart-line-duotone", path: "/billings/status" },
    ],
  },
  {
    name: "Contents",
    icon: "solar:folder-path-connect-bold-duotone",
    items: [
      {
        name: "캐릭터 관리",
        icon: "solar:people-nearby-broken",
        path: "/characters",
        children: [
          {
            name: "캐릭터",
            path: "/characters/management",
          },
          {
            name: "캐릭터리소스",
            path: "/characters/resources",
          },
          {
            name: "조직별 캐릭터 관리",
            path: "/characters/organization",
          },
        ],
      },
      {
        name: "애니메이션 관리",
        icon: "solar:chat-round-video-bold-duotone",
        path: "/animations",
        children: [
          {
            name: "애니메이션",
            path: "/animations/management",
          },
        ],
      },
    ],
  },
];

export default SideMenuItems;
