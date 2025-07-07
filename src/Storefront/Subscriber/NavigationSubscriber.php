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

        // TODO: Add logic to add sub-navigation to the header
    }
}
