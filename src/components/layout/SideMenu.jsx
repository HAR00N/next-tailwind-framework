import Image from "next/image";
import { useRouter } from "next/navigation.js";

export default function SideMenu() {
  const router = useRouter();

  const mainListItems = [
    {
      text: "대시보드",
      icon: <Image className="fill-current" src="/icons/dashboard.svg" alt="dashboard" height={24} width={24} />,
      path: "/dashboard",
      subItems: null,
    },
    {
      text: "조직 관리",
      icon: <Image className="dark:invert" src="/icons/organization.svg" alt="organization" height={24} width={24} />,
      path: "/organizations",
      subItems: null,
    },
    {
      text: "관리자 관리",
      icon: <Image className="dark:invert" src="/icons/managers.svg" alt="managers" height={24} width={24} />,
      path: "/managers",
      subItems: null,
    },
    {
      text: "이용자 관리",
      icon: <Image className="dark:invert" src="/icons/users.svg" alt="users" height={24} width={24} />,
      path: "/users",
      subItems: null,
    },
    {
      text: "과금 정보",
      path: "/billings",
      icon: <Image className="dark:invert" src="/icons/billing.svg" alt="billing" height={24} width={24} />,
      subItems: [
        { text: "요금제 관리", path: "/billings/information" },
        { text: "과금 정보", path: "/billings/status" },
      ],
    },
    {
      text: "LMS",
      path: "/lms",
      icon: <Image className="dark:invert" src="/icons/lms.svg" alt="lms" height={24} width={24} />,
      subItems: [
        { text: "License 관리", path: "/lms/licenses" },
        { text: "API Key 매핑", path: "/lms/licenseMapping" },
        { text: "스케줄러 관리", path: "/lms/schedulers" },
      ],
    },
    {
      text: "캐릭터 관리",
      path: "/characters",
      icon: <Image className="dark:invert" src="/icons/users.svg" alt="users" height={24} width={24} />,
      subItems: [
        { text: "캐릭터", path: "/characters/licenses" },
        { text: "캐릭터리소스", path: "/characters/resource" },
        { text: "조직별 캐릭터 관리", path: "/characters/organizationAvatar" },
      ],
    },
    {
      text: "애니메이션 관리",
      path: "/animations",
      icon: <Image className="dark:invert" src="/icons/users.svg" alt="users" height={24} width={24} />,
      subItems: [{ text: "애니메이션", path: "/animations/licenses" }],
    },
  ];

  return (
    <aside className="flex w-64 flex-col p-4 shadow-md dark:shadow-white/8">
      <div className="my-5 flex items-center justify-center">
        <Image className="dark:invert" src="/images/logo_v_white.svg" alt="logo" height={100} width={120} />
      </div>

      <nav className="mt-4 flex flex-col gap-2">
        {mainListItems.map((item) => (
          <button
            key={item.path}
            className={`flex items-center gap-2 rounded-md bg-transparent px-3 py-2 text-left ${item.text === "대시보드" ? "active" : ""}`}
            onClick={() => router.push(item.path)}
          >
            {item.icon}
            <span>{item.text}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
