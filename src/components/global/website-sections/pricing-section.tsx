'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import NumberFlow from '@number-flow/react';
import { BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const PAYMENT_FREQUENCIES: ('monthly' | 'yearly')[] = ['monthly', 'yearly'];
const TIERS = [
	{
		id: 'open_source',
		name: 'Open Source',
		price: {
			monthly: "Free",
			yearly: "Free",
		},
		description: 'For your hobby projects',
		features: [
			'Basic DM automation',
			'Up to 1000 messages per month',
			'Community support',
			'Limited to 10 automations',
		],
		cta: 'Get started on Github',
	},
	{
		id: 'pro',
		name: 'Pro',
		price: {
			monthly: 50,
			yearly: 40,
		},
		description: 'Great for small businesses',
		features: [
			'Everything from free',
			'AI-powered DM replies in DMs',
			'Unlimtited automations',
			'Up to 5 users',
			'24/7 support',
		],
		cta: 'Get started',
		popular: true,
	},
	// {
	// 	id: 'organizations',
	// 	name: 'Organizations',
	// 	price: {
	// 		monthly: 120,
	// 		yearly: 100,
	// 	},
	// 	description: 'Great for large businesses',
	// 	features: [
	// 		'Unlimited phone calls',
	// 		'15 second checks',
	// 		'Single-user account',
	// 		'50 monitors',
	// 		'Up to 10 seats',
	// 	],
	// 	cta: 'Get started',
	// },
	{
		id: 'enterprise',
		name: 'Enterprise',
		price: {
			monthly: 'Custom',
			yearly: 'Custom',
		},
		description: 'For multiple teams',
		features: [
			'Everything in Organizations',
			'Up to 5 team members',
			'100 monitors',
			'15 status pages',
			'200+ integrations',
		],
		cta: 'Contact Us',
		highlighted: true,
	},
];

const HighlightedBackground = () => (
	<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:45px_45px] opacity-100 dark:opacity-30" />
);

const PopularBackground = () => (
	<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(240,119,119,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,119,118,0.3),rgba(255,255,255,0))]" />
);

const Tab = ({
	text,
	selected,
	setSelected,
	discount = false,
}: {
	text: string;
	selected: boolean;
	setSelected: (text: string) => void;
	discount?: boolean;
}) => {
	return (
		<button
			onClick={() => setSelected(text)}
			className={cn(
				'text-foreground relative w-fit px-4 py-2 text-sm font-semibold capitalize transition-colors',
				discount && 'flex items-center justify-center gap-2.5',
			)}
		>
			<span className="relative z-10">{text}</span>
			{selected && (
				<motion.span
					layoutId="tab"
					transition={{ type: 'spring', duration: 0.4 }}
					className="bg-background absolute inset-0 z-0 rounded-full shadow-sm"
				></motion.span>
			)}
			{discount && (
				<Badge
					className={cn(
						'relative z-10 bg-gray-100 text-xs whitespace-nowrap text-black shadow-none hover:bg-gray-100',
						selected
							? 'bg-[#F3F4F6] hover:bg-[#F3F4F6]'
							: 'bg-gray-300 hover:bg-gray-300',
					)}
				>
					Save 20%
				</Badge>
			)}
		</button>
	);
};

const PricingCard = ({
	tier,
	paymentFrequency,
}: {
	tier: (typeof TIERS)[0];
	paymentFrequency: keyof typeof tier.price;
}) => {
	const price = tier.price[paymentFrequency];
	const isHighlighted = tier.highlighted;
	const isPopular = tier.popular;

	return (
		<div
			className={cn(
				'relative flex flex-col gap-8 overflow-hidden rounded-2xl border p-6 shadow',
				isHighlighted
					? 'bg-foreground text-background'
					: 'bg-background text-foreground',
				isPopular && 'outline outline-[#818cf8]',
			)}
		>
			{isHighlighted && <HighlightedBackground />}
			{isPopular && <PopularBackground />}

			<h2 className="flex items-center gap-3 text-xl font-medium capitalize">
				{tier.name}
				{isPopular && (
					<Badge className="mt-1 bg-orange-900 px-1 py-0 text-white hover:bg-orange-900">
						🔥 Most Popular
					</Badge>
				)}
			</h2>

			<div className="relative h-12">
				{typeof price === 'number' ? (
					<>
						<NumberFlow
							format={{
								style: 'currency',
								currency: 'BRL',
								trailingZeroDisplay: 'stripIfInteger',
							}}
							value={price}
							className="text-4xl font-medium"
						/>
						<p className="-mt-2 text-xs font-medium">Per month</p>
					</>
				) : (
					<h1 className="text-4xl font-medium">{price}</h1>
				)}
			</div>

			<div className="flex-1 space-y-2">
				<h3 className="text-sm font-medium">{tier.description}</h3>
				<ul className="space-y-2">
					{tier.features.map((feature, index) => (
						<li
							key={index}
							className={cn(
								'flex items-center gap-2 text-sm font-medium',
								isHighlighted ? 'text-background' : 'text-foreground/60',
							)}
						>
							<BadgeCheck strokeWidth={1} size={16} />
							{feature}
						</li>
					))}
				</ul>
			</div>

			<Button
				className={cn(
					'h-fit w-full rounded-lg text-white',
					isHighlighted && 'bg-accent text-foreground hover:bg-accent/95',
				)}
			>
				{tier.cta}
			</Button>
		</div>
	);
};

const filteredTiers = TIERS.filter((tier) => tier.id !== 'enterprise');

export default function PricingSection() {
	const [selectedPaymentFreq, setSelectedPaymentFreq] = useState<
		'monthly' | 'yearly'
	>(PAYMENT_FREQUENCIES[0]);

	return (
		<section className="flex flex-col items-center gap-10 py-10 bg-background" id='pricing'>
			<div className="space-y-7 text-center">
				<div className="space-y-4">
					<h2 className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl lg:text-5xl">
						Pricing made for growth
					</h2>
					<p className="text-foreground/60 mt-3 text-center">
						Whether you’re experimenting with automation or scaling your outreach — senDMe has a plan for every stage.
					</p>
				</div>
				<div className="mx-auto flex w-fit rounded-full bg-[#F3F4F6] p-1 dark:bg-[#222]">
					{PAYMENT_FREQUENCIES.map((freq) => (
						<Tab
							key={freq}
							text={freq}
							selected={selectedPaymentFreq === freq}
							setSelected={(text) =>
								setSelectedPaymentFreq(text as 'monthly' | 'yearly')
							}
							discount={freq === 'yearly'}
						/>
					))}
				</div>
			</div>

			<div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
				{filteredTiers.map((tier, i) => (
					<PricingCard
						key={i}
						tier={tier}
						paymentFrequency={selectedPaymentFreq}
					/>
				))}
			</div>
		</section>
	);
}
