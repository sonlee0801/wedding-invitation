import { CircleParking, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const lots = [
  {
    name: "공영주차장",
    desc: "AW컨벤션 정문 맞은편",
    address: "경기 안산시 단원구 고잔동 719",
  },
  {
    name: "AW 주차타워 (양지주차타워)",
    desc: "",
    address: "경기 안산시 단원구 광덕서로 48",
  },
  {
    name: "MK 주차타워",
    desc: "",
    address: "경기 안산시 단원구 광덕2로 156-11",
  },
];

export function Parking() {
  return (
    <section className="px-6 py-8">
      <h3 className="mb-4 text-center font-serif-ko text-lg text-foreground">주차 안내</h3>
      <div className="space-y-3">
        {lots.map((lot, i) => {
          const naver = `https://map.naver.com/v5/search/${encodeURIComponent(lot.address)}`;
          const kakao = `https://map.kakao.com/?q=${encodeURIComponent(lot.address)}`;
          return (
            <div key={lot.name} className="rounded-2xl bg-card p-4 text-card-foreground shadow-lg">
              <div className="flex items-start gap-2">
                <CircleParking className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-bold">
                    {i + 1}. {lot.name}
                  </p>
                  {lot.desc && <p className="mt-0.5 text-xs text-muted-foreground">{lot.desc}</p>}
                  <p className="mt-1 text-xs text-foreground/80">{lot.address}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <Button asChild size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={naver} target="_blank" rel="noreferrer">
                    <Navigation className="mr-1 h-3.5 w-3.5" /> 네이버지도
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="flex-1 border-primary/40 text-primary hover:bg-primary/10">
                  <a href={kakao} target="_blank" rel="noreferrer">
                    <Navigation className="mr-1 h-3.5 w-3.5" /> 카카오맵
                  </a>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 space-y-1.5 rounded-xl bg-secondary/40 p-4 text-xs leading-relaxed text-foreground/85">
        <p>※ AW컨벤션 지하 주차장은 이용이 불가합니다.</p>
        <p>※ 예식장 주차장이 혼잡할 수 있으니, 대중교통 이용 또는 예정보다 여유롭게 출발하시기를 부탁드립니다.</p>
        <p className="pt-1 text-center font-serif-ko text-foreground">멀리서 귀한 걸음 해주셔서 진심으로 감사드립니다.</p>
      </div>
    </section>
  );
}
