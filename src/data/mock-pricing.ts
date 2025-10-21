import { PricingPlan, typeT } from "@/lib/types";

export const plans = (t: typeT): PricingPlan[] => [
  {
    name: t("pricingPlans.0.name"),
    price: 29,
    features: [
      { name: t("pricingPlans.0.features.0.name"), included: true },
      { name: t("pricingPlans.0.features.1.name"), included: true },
      { name: t("pricingPlans.0.features.2.name"), included: true },
      { name: t("pricingPlans.0.features.3.name"), included: false },
      { name: t("pricingPlans.0.features.4.name"), included: false },
    ],
  },
  {
    name: t("pricingPlans.1.name"),
    price: 29,
    features: [
      { name: t("pricingPlans.1.features.0.name"), included: true },
      { name: t("pricingPlans.1.features.1.name"), included: true },
      { name: t("pricingPlans.1.features.2.name"), included: true },
      { name: t("pricingPlans.1.features.3.name"), included: false },
      { name: t("pricingPlans.1.features.4.name"), included: false },
    ],
  },
  {
    name: t("pricingPlans.2.name"),
    price: 29,
    features: [
      { name: t("pricingPlans.2.features.0.name"), included: true },
      { name: t("pricingPlans.2.features.1.name"), included: true },
      { name: t("pricingPlans.2.features.2.name"), included: true },
      { name: t("pricingPlans.2.features.3.name"), included: false },
      { name: t("pricingPlans.2.features.4.name"), included: false },
    ],
  },
];
