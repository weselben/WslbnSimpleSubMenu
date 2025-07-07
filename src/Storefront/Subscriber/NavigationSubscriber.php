<?php declare(strict_types=1);

namespace Wslbn\SimpleSubMenu\Storefront\Subscriber;

use Shopware\Core\System\SystemConfig\SystemConfigService;
use Shopware\Storefront\Pagelet\Header\HeaderPageletLoadedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class NavigationSubscriber implements EventSubscriberInterface
{
    private SystemConfigService $systemConfigService;

    public function __construct(SystemConfigService $systemConfigService)
    {
        $this->systemConfigService = $systemConfigService;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            HeaderPageletLoadedEvent::class => 'onHeaderPageletLoaded'
        ];
    }

    public function onHeaderPageletLoaded(HeaderPageletLoadedEvent $event):
    {
        $salesChannelId = $event->getSalesChannelContext()->getSalesChannel()->getId();

        if (!$this->systemConfigService->get('WslbnSimpleSubMenu.config.active', $salesChannelId)) {
            return;
        }

        $config = [
            'submenuBackgroundColor' => $this->systemConfigService->get('WslbnSimpleSubMenu.config.submenuBackgroundColor', $salesChannelId),
            'submenuTextColor' => $this->systemConfigService->get('WslbnSimpleSubMenu.config.submenuTextColor', $salesChannelId),
            'submenuFontSize' => $this->systemConfigService->get('WslbnSimpleSubMenu.config.submenuFontSize', $salesChannelId),
            'submenuLinkHoverColor' => $this->systemConfigService->get('WslbnSimpleSubMenu.config.submenuLinkHoverColor', $salesChannelId),
        ];

        $event->getPagelet()->addExtension('wslbnSimpleSubMenuConfig', new \Shopware\Core\Framework\Struct\ArrayStruct($config));
    }
}
