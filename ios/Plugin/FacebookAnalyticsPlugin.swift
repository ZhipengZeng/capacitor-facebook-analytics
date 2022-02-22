import Foundation
import Capacitor
import FBSDKCoreKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(FacebookAnalyticsPlugin)
public class FacebookAnalyticsPlugin: CAPPlugin {
//    private let implementation = FacebookAnalytics()
//
//    @objc func echo(_ call: CAPPluginCall) {
//        let value = call.getString("value") ?? ""
//        call.resolve([
//            "value": implementation.echo(value)
//        ])
//    }
    
    @objc func logEvent(_ call: CAPPluginCall) {
        guard let event = call.getString("event") else {
            call.reject("Missing event argument")
            return;
        }

        print(event)

        if let valueToSum = call.getDouble("valueToSum") {
            if let params = call.getObject("params") {
                AppEvents.logEvent(.init(event), valueToSum: valueToSum, parameters: params)
            } else {
                AppEvents.logEvent(.init(event), valueToSum: valueToSum)
            }
        } else {
            if let params = call.getObject("params") {
                AppEvents.logEvent(.init(event), parameters: params)
            } else {
                AppEvents.logEvent(.init(event))
            }
        }
        call.resolve()
    }

}
