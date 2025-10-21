import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { plans } from "@/data/mock-pricing";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PricingSection() {
  const t = useTranslations("PricingPage");
  return (
    <div className="container px-4 md:px-6">
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
        {plans(t).map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader className="flex-1 bg-primary rounded-t-lg p-6">
              <h3 className="text-2xl font-bold text-center text-white">
                {plan.name}
              </h3>
              <div className="mt-4 text-center text-white">
                <span className="text-4xl font-bold">$</span>
                <span className="text-6xl font-bold">{plan.price}</span>
                <span className="text-2xl">.00</span>
                <p className="mt-1 text-white/90">Per Monthly</p>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-6">
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature.name}
                    className="flex items-center space-x-3"
                  >
                    {feature.included ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400" />
                    )}
                    <span
                      className={
                        feature.included ? "text-gray-900" : "text-gray-400"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full mt-8 py-6 bg-primary hover:primary/80 text-white"
                variant="default"
              >
                {t("purchase")}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
