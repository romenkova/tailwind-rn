import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';
import tw from 'twrnc';
import {
  BadgeCheckIcon,
  ClockIcon,
  UsersIcon,
} from 'react-native-heroicons/outline';

const actions = [
  {
    title: 'Request time off',
    href: '#',
    icon: ClockIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Benefits',
    href: '#',
    icon: BadgeCheckIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Schedule a one-on-one',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TailwindTest() {
  return (
    <SafeAreaView style={tw`h-full bg-gray-50`}>
      <View style={tw`bg-white px-4 py-5 border-b border-gray-200`}>
        <Text style={tw`text-xl bold leading-6 font-medium text-gray-900`}>
          Tailwind Title
        </Text>
      </View>
      <View style={tw`px-4 py-5`}>
        <Text style={tw`text-lg leading-6 font-medium text-gray-900`}>
          Delete your account
        </Text>
        <View style={tw`mt-2 max-w-xl text-sm text-gray-500`}>
          <Text style={tw`text-gray-500`}>
            Once you delete your account, you will lose all data associated with
            it.
          </Text>
        </View>
        <View style={tw`mt-5`}>
          <TouchableOpacity>
            <View
              style={tailwind(
                'items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 text-sm',
              )}>
              <Text style={tw`text-red-700`}>Delete account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={tw`bg-gray-50 pt-12 mb-5`}>
          <View style={tw`max-w-7xl mx-auto px-4 px-6 lg:px-8`}>
            <View style={tw`max-w-4xl mx-auto text-center`}>
              <Text style={tw`text-3xl font-extrabold text-gray-900 `}>
                Trusted by developers from over 80 planets
              </Text>
              <Text style={tw`mt-3 text-xl text-gray-500 `}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus repellat laudantium.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`rounded-lg bg-gray-200 shadow-md m-4`}>
        {actions.map((action, actionIdx) => (
          <View
            key={action.title}
            style={tw`${classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg' : '',
              actionIdx === actions.length - 1
                ? 'rounded-bl-lg rounded-br-lg'
                : '',
              'relative bg-white p-6 border-b border-gray-100',
            )}`}>
            <View>
              <View
                style={tw`${classNames(
                  action.iconBackground,
                  'rounded-lg w-12 p-3 ring-4 mb-4',
                )}`}>
                <action.icon
                  style={tw`h-6 w-6 ${action.iconForeground}`}
                  aria-hidden="true"
                />
              </View>
            </View>
            <View>
              <Text style={tw`text-lg font-medium`}>{action.title}</Text>
              <Text style={tw`mt-2 text-sm text-gray-500`}>
                Doloribus dolores nostrum quia qui natus officia quod et
                dolorem. Sit repellendus qui ut at blanditiis et quo et
                molestiae.
              </Text>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
