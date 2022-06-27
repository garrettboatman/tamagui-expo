import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Github, Twitter } from "@tamagui/feather-icons";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Anchor, Button, H1, Paragraph, Separator, YStack } from "tamagui";

import { LinkToUser } from "./link-to-user";

export const HomeScreen: FC<
  NativeStackScreenProps<StackNavigatorParams, "home">
> = ({ navigation }) => {
  const { t } = useTranslation("home");

  return (
    <YStack bc="$background" f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">{t("welcome")}</H1>
        <Paragraph ta="center">{t("message")}</Paragraph>
        <Separator />
        <Paragraph ta="center">{t("made-by")}</Paragraph>
      </YStack>

      <LinkToUser navigation={navigation} />

      <YStack ai="center" mt="$2.5" space="$2.5">
        <Anchor asChild href="https://twitter.com/natebirdman" target="_blank">
          <Button icon={Twitter}>Nate</Button>
        </Anchor>
        <Anchor
          asChild
          href="https://github.com/tamagui/tamagui"
          target="_blank"
          rel="noreferrer"
        >
          <Button icon={Github}>Tamagui</Button>
        </Anchor>
        <Anchor
          asChild
          href="https://github.com/ivopr/tamagui-expo"
          target="_blank"
          rel="noreferrer"
        >
          <Button icon={Github}>Template</Button>
        </Anchor>
      </YStack>
    </YStack>
  );
};
